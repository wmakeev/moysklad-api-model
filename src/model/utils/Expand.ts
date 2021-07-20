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
type ExpandField<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    // EntityRef | CollectionRef
    ? T[P] extends EntityRef<infer M> | undefined
      // CollectionRef
      ? T[P] extends CollectionRef<M>
        ? Collection<M>

      : T[P] extends CollectionRef<M> | undefined
        ? Collection<M> | undefined

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
  : T extends Collection
    ? T & { rows: ExpandPath<T['rows'], K> }

  // 'foo.bar'
  : K extends `${infer Field}.${infer Rest}`
    ? Field extends keyof T
      ? ExpandField<T, Field> &
          {
            [Key in Field]: ExpandPath<ExpandField<T, Field>[Field], Rest>
          }
      : never

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
    ? ExpandPath<T, Path> & Expand<T, Rest>

  // 'foo.bar'
  : U extends string ? ExpandPath<T, U> : never

// TODO 'positions.assortment,agent.attributes.value'
// TODO 'attributes.value,agent.attributes.value'
// TODO 'agent,operations,operations.customerOrder'
