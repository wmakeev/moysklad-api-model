import type {
  Collection,
  CollectionRef,
  EntityByMetaType,
  EntityRef,
  AttributeMetadata
} from '../'
import type { FinaceOperationMetaType, FinaceOperationRef } from '../Finance'

// prettier-ignore

/**
 * Возвращает развернутый тип для указанного поля
 */
export type ExpandedField<T, K extends string> =
  T extends Array<infer Item> | Collection<infer Item>
    ? K extends keyof Item
      ? ExpandedField<Item, K>
      : `[Error] ExpandedField: Неизвестое поле '${K}' внутри списка или коллекции`

  : T extends CollectionRef<infer Item>
    ? K extends keyof EntityByMetaType[Item]
      ? Collection<ExpandField<EntityByMetaType[Item], K>>
      : `[Error] ExpandedField: Неизвестое поле '${K}' внутри CollectionRef<'${Item}'>`

  : K extends keyof T
    ? T[K] extends EntityRef<infer M> | undefined
      // Уже раскрытая сущность
      ? T[K] extends { id: string }
        ? T[K]

      // Уже раскрытая коллекция
      : T[K] extends { rows: Array<any> }
        ? T[K]

      : T[K] extends CollectionRef<M>
        ? Collection<EntityByMetaType[M]>

      : T[K] extends CollectionRef<M> | undefined
        ? Collection<EntityByMetaType[M]> | undefined

      : T[K] extends EntityRef<M>
        ? EntityByMetaType[M]

      : T[K] extends EntityRef<M> | undefined
        ? EntityByMetaType[M] | undefined

      : '[Error] never-pDw3s'

    : T[K]

  : `[Error] ExpandedField: Неизвестный путь "${K}" #9al4cs`

// prettier-ignore

/**
 * Возвращает тип в котором развернуто указанное поле
 */
export type ExpandField<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    // .operations
    ? T[P] extends Array<EntityRef<infer M>> | undefined
      ? P extends 'operations'
        ? Array<EntityByMetaType[FinaceOperationMetaType] & { linkedSum: number }>

      : T[P] extends Array<EntityRef<M>>
        ? Array<EntityByMetaType[M]>

      : T[P] extends Array<EntityRef<M>> | undefined
        ? Array<EntityByMetaType[M]> | undefined
        : 'never-3yswqc'

    // EntityRef | CollectionRef
    : T[P] extends EntityRef<infer M> | undefined
      // Уже раскрытая сущность
      ? T[P] extends { id: string }
        ? T[P]

      // Уже раскрытая коллекция
      : T[P] extends { rows: Array<any> }
        ? T[P]

      // CollectionRef

      // - исключение для attributemetadata (если коллекция то, другая структура)
      : T[P] extends CollectionRef<'attributemetadata'>
        ? Collection<AttributeMetadata>

      : T[P] extends CollectionRef<M>
        ? Collection<EntityByMetaType[M]>

      : T[P] extends CollectionRef<M> | undefined
        ? Collection<EntityByMetaType[M]> | undefined

      : T[P] extends EntityRef<M>
        ? EntityByMetaType[M]

      : T[P] extends EntityRef<M> | undefined
        ? EntityByMetaType[M] | undefined
        : 'never-eus8s'

      : T[P]

    // default
    :T[P]
}

// prettier-ignore

/**
 * Разворачивает только одно поле типа по строке expand в формате API МойСклад
 */
export type ExpandPath<T, Path extends string> =
  string extends Path
    ? never

  // i.e. `attributes`
  : T extends Array<infer M>
      ? Array<ExpandPath<M, Path>>

  // i.e. `positions`
  : T extends Collection<infer U>
    ? {
        [P in keyof T]: P extends 'rows'
          ? ExpandPath<U, Path>[]
          : T[P]
      }

  // 'foo.bar'
  : Path extends `${infer Field}.${infer Rest}`
    ? {
        [P in keyof T]: Field extends P
          ? ExpandPath<ExpandedField<T, Field>, Rest>
          : T[P]
      }

  // 'foo'
  : Path extends keyof T
    ? ExpandField<T, Path>

  : never

// prettier-ignore

/**
 * Разворачивает поля типа по строке expand в формате API МойСклад
 */
export type Expand<T, ExpandStr extends string | undefined> =
  // Исходный тип если expand не задан
  ExpandStr extends undefined
    ? T

  : string extends ExpandStr
    ? never

  // 'foo.bar,baz'
  : ExpandStr extends `${infer Tail},${infer Rest}`
    ? Expand<ExpandPath<T, Tail>, Rest>

  // 'foo.bar'
  : ExpandStr extends string
    ? ExpandPath<T, ExpandStr>


  : never
