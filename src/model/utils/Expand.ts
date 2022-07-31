import type {
  Collection,
  CollectionRef,
  EntityByMetaType,
  EntityRef,
  MetadataAttribute,
  MetaType
} from '../'

// prettier-ignore

/**
 * Возвращает развернутый тип для указанного поля
 */
export type ExpandedField<T, K extends string> =
  T extends Array<infer U> | Collection<infer U>
    ? K extends keyof U
      ? ExpandedField<U, K>
      : `[Error] ExpandedField: Неизвестое поле '${K}' внутри списка или коллекции`

  : T extends CollectionRef<infer M>
    ? K extends keyof EntityByMetaType[M]
      ? Collection<ExpandField<EntityByMetaType[M], K>>
      : `[Error] ExpandedField: Неизвестое поле '${K}' внутри CollectionRef<'${M}'>`

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
    // EntityRef | CollectionRef
    ? T[P] extends EntityRef<infer M> | undefined
      // Уже раскрытая сущность
      ? T[P] extends { id: string }
        ? T[P]

      // Уже раскрытая коллекция
      : T[P] extends { rows: Array<any> }
        ? T[P]

      // CollectionRef

      // - исключение для attributemetadata (если коллекция то, другая структура)
      : T[P] extends CollectionRef<'attributemetadata'>
        ? Collection<MetadataAttribute>

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
    : T[P]
}

// prettier-ignore

/**
 * Разворачивает только одно поле типа по строке expand в формате API МойСклад
 */
export type ExpandPath<T, K extends string> =
  string extends K
    ? never

  // i.e. `attributes`
  : T extends Array<infer M>
      ? Array<ExpandPath<M, K>>

  // i.e. `positions`
  : T extends Collection<infer U>
    ? {
        [P in keyof T]: P extends 'rows'
          ? ExpandPath<U, K>[]
          : T[P]
      }

  // 'foo.bar'
  : K extends `${infer Field}.${infer Rest}`
    ? {
        [P in keyof T]: Field extends P
          ? ExpandPath<ExpandedField<T, Field>, Rest>
          : T[P]
      }

  // 'foo'
  : K extends keyof T
    ? ExpandField<T, K>

  : never

// prettier-ignore

/**
 * Разворачивает поля типа по строке expand в формате API МойСклад
 */
export type Expand<T, U extends string | undefined> =
  // Исходный тип если expand не задан
  U extends undefined
    ? T

  : string extends U
    ? never

  // 'foo.bar,baz'
  : U extends `${infer Path},${infer Rest}`
    ? Expand<ExpandPath<T, Path>, Rest>

  // 'foo.bar'
  : U extends string
    ? ExpandPath<T, U>


  : never
