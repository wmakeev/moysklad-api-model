import type {
  Collection,
  CollectionRef,
  EntityByMetaType,
  EntityRef,
  MetaType
} from '../'

type t1 = EntityRef<'account'> extends CollectionRef<'account'> ? true : false

// prettier-ignore

/**
 * Разворачивает конкретное поле в типе
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

      ? T[K] extends CollectionRef<M>
        ? Collection<EntityByMetaType[M]>

      : T[K] extends CollectionRef<M> | undefined
        ? Collection<EntityByMetaType[M]> | undefined

      : T[K] extends EntityRef<M>
        ? EntityByMetaType[M]

      : T[K] extends EntityRef<M> | undefined
        ? EntityByMetaType[M] | undefined

      : '[Error] never-eus8s'

    : T[K]

  : `[Error] ExpandedField: Неизвестный путь "${K}" #9al4cs`

// prettier-ignore

/**
 * Разворачивает конкретное поле в типе
 */
export type ExpandField<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    // EntityRef | CollectionRef
    ? T[P] extends EntityRef<infer M> | undefined
      // CollectionRef
      ? T[P] extends CollectionRef<M>
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
    ? '[Error] ExpandPath: Неизвестный путь - string'

  // i.e. `attributes`
  : T extends Array<infer M>
      ? Array<ExpandPath<M, K>>

  // i.e. `positions`
  : T extends Collection<infer U>
    // ? T & { rows: ExpandPath<T['rows'], K> }
    // ? CollectionRef<M> & { rows: ExpandPath<EntityByMetaType[M], K>[] }
    // TODO Протестировано?
    ? {
        [P in keyof T]: P extends 'rows'
          ? ExpandPath<U, K>[]
          : T[P]
      }

  // 'foo.bar'
  : K extends `${infer Field}.${infer Rest}`
    // ? Field extends keyof T
      // ? ExpandField<T, Field> &
      //     {
      //       [Key in Field]: ExpandPath<ExpandField<T, Field>[Field], Rest>
      //     }
    // : never
    ? {
        [P in keyof T]: Field extends P
          ? ExpandPath<ExpandedField<T, Field>, Rest>
          : T[P]
      }

  // 'foo'
  : K extends keyof T
    ? ExpandField<T, K>

  : never // `[Error] ExpandPath: Неизвестный путь - ${K}`

// prettier-ignore

/**
 * Разворачивает поля типа по строке expand в формате API МойСклад
 */
export type Expand<T, U extends string | undefined> =
  // Исходный тип если expand не задан
  U extends undefined
    ? T

  : string extends U
    ? '[Error] Expand: Неизвестный путь - string'

  // 'foo.bar,baz'
  : U extends `${infer Path},${infer Rest}`
    ? Expand<ExpandPath<T, Path>, Rest>

  // 'foo.bar'
  : U extends string
    ? ExpandPath<T, U>

  : `[Error] Expand: Неизвестный путь - ${U}`

// TODO 'positions.assortment,agent.attributes.value'
// TODO 'attributes.value,agent.attributes.value'
// TODO 'agent,operations,operations.customerOrder'
