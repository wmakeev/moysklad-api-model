# Почему код сломался в TypeScript 5.9: строгая проверка generic constraints

## Контекст проблемы

В файле `Expand.ts` была строка:

```ts
Collection<ExpandField<EntityByMetaType[Item], K>>
```

Она работала в TS 5.3, но перестала компилироваться в TS 5.9.

---

## Что такое generic constraint?

`Collection` определён так:

```ts
interface Collection<T extends EntityRef<MetaType>> extends CollectionRef<T['meta']['type']> {
  rows: T[]
}
```

`T extends EntityRef<MetaType>` — это **constraint** (ограничение). Он говорит:
«Параметр `T` должен быть совместим с типом `EntityRef<MetaType>`».

Чтобы передать что-то в `Collection<...>`, TypeScript должен **доказать**, что переданный
тип удовлетворяет этому ограничению.

---

## Что такое `ExpandField`?

```ts
type ExpandField<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    ? /* развёрнутый тип поля */
    : T[P]  // остальные поля без изменений
}
```

Это **mapped type** — он проходит по всем ключам `T` и для одного конкретного ключа `K`
подставляет развёрнутый тип, а остальные поля оставляет как есть.

**Для человека** очевидно: если `T` — это сущность с полем `meta: Meta<SomeType>`,
и мы разворачиваем поле `positions` (а не `meta`), то в результате поле `meta` останется
нетронутым, и тип по-прежнему совместим с `EntityRef<MetaType>`.

**Для компилятора** это не очевидно — он видит сложный conditional type внутри mapped type
и не может доказать, что `meta` в результате будет иметь нужную форму.

---

## Что изменилось в TS 5.9?

### Как было в TS 5.3 (ленивая проверка)

TS 5.3 при встрече с выражением вроде:

```ts
Collection<ExpandField<EntityByMetaType[Item], K>>
```

видел, что `ExpandField<...>` зависит от ещё не конкретизированных параметров (`Item`, `K`).
В такой ситуации он **откладывал проверку** constraint до момента, когда тип будет
инстанциирован с конкретными значениями. Т.е.:

```
ExpandField<EntityByMetaType[Item], K>  →  "не могу проверить сейчас, проверю потом"  →  OK
```

Когда позже передавались конкретные типы (например, `Item = 'product'`, `K = 'positions'`),
всё разворачивалось и constraint выполнялся.

### Как стало в TS 5.9 (строгая проверка)

TS 5.9 стал **строже проверять constraints на уровне определения типа**, даже когда
параметры ещё generic. Компилятор пытается **доказать совместимость «в общем случае»**:

```
ExpandField<EntityByMetaType[Item], K>  →  "должен extends EntityRef<MetaType>"  →  ???
```

Он раскрывает `ExpandField` и смотрит, что получается для поля `meta`:

```ts
// Для ключа P = 'meta':
K extends 'meta'
  ? /* какой-то сложный conditional тип */
  : EntityByMetaType[Item]['meta']   // оригинальный meta
```

TS видит **union двух веток**: в одной ветке `meta` не трогается (OK), но в другой
(когда `K = 'meta'`) — результат зависит от цепочки вложенных conditional types.
Компилятор не может доказать, что **все возможные пути** conditional type дают
`Meta<MetaType>`, и выдаёт ошибку.

---

## Упрощённый пример

```ts
// ===== Базовые типы =====

interface HasName {
  name: string
}

interface Box<T extends HasName> {
  value: T
}

// Mapped type — меняет одно поле, остальные не трогает
type ModifyField<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    ? T[P] extends string
      ? number      // меняем string → number
      : T[P]
    : T[P]          // остальные не трогаем
}

// ===== Тестируемый тип =====

interface User {
  name: string
  age: number
}

// ----- TS 5.3: OK, TS 5.9: ОШИБКА -----
type Test1 = Box<ModifyField<User, 'age'>>
//                ~~~~~~~~~~~~~~~~~~~~~~~~
// TS 5.9: "ModifyField<User, 'age'> does not satisfy the constraint 'HasName'"
//
// Человек видит: мы меняем 'age', а 'name' остаётся string → всё ОК.
// Компилятор видит: для P = 'name', conditional 'age' extends 'name' — false,
//   значит T[P] = string... но он не уверен в ОБЩЕМ случае.

// ----- Исправление: intersection -----
type Test2 = Box<ModifyField<User, 'age'> & User>
//  OK в обеих версиях
```

---

## Как работает исправление `& EntityByMetaType[Item]`

```ts
// Было (TS 5.9 ошибка):
Collection<ExpandField<EntityByMetaType[Item], K>>

// Стало (OK):
Collection<ExpandField<EntityByMetaType[Item], K> & EntityByMetaType[Item]>
```

**Intersection (`&`)** объединяет два типа — результат содержит свойства обоих.

TypeScript знает, что `EntityByMetaType[Item]` — это сущность, которая **точно** extends
`EntityRef<MetaType>` (это следует из определения `EntityByMetaType`).

Когда мы пишем `A & B`, где `B extends EntityRef<MetaType>`, то `A & B` тоже
`extends EntityRef<MetaType>`, потому что intersection как минимум содержит все свойства `B`.

```
ExpandField<...>                    →  TS не может доказать extends EntityRef
EntityByMetaType[Item]              →  TS знает, что extends EntityRef
ExpandField<...> & EntityByMetaType[Item]  →  extends EntityRef (благодаря правой части)
```

### Семантически это безопасно

`ExpandField` модифицирует **одно** поле, остальные оставляет как есть. Intersection
с оригиналом не «портит» изменённое поле — он сужает его тип (intersection свойств):

```ts
// ExpandField меняет поле positions: CollectionRef → Collection
// EntityByMetaType[Item] имеет positions: CollectionRef
// Intersection: positions: Collection & CollectionRef = Collection (Collection extends CollectionRef)
```

Поскольку `Collection extends CollectionRef`, intersection даёт `Collection` — именно то,
что нужно.

---

## Резюме

| | TS 5.3 | TS 5.9 |
|---|---|---|
| Проверка constraint для generic mapped type | Отложенная (при инстанциации) | Немедленная (на уровне определения) |
| `Collection<ExpandField<...>>` | OK | Ошибка |
| `Collection<ExpandField<...> & OriginalEntity>` | OK | OK |

**Общий паттерн:** если mapped/conditional type передаётся в generic с constraint,
и TS не может доказать совместимость — добавьте intersection с типом, который
гарантированно удовлетворяет constraint.
