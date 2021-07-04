import type { WritableKeys } from '.'
import type { CollectionRef, EntityByMetaType, MetaType } from '..'
import type { Entity } from '../Entity'
import type { EntityRef } from '../EntityRef'

// prettier-ignore

export type Patch<
  T extends Entity<U> | Entity<U>[],
  U extends MetaType = MetaType
> =
  // Patch<Entity>
  T extends Entity<U>
  ? Partial<
      {
        [P in WritableKeys<T>]:
          // Коллекция МойСклад (positions)
          T[P] extends CollectionRef<infer M> | undefined
          ? (Patch<EntityByMetaType[M]> & EntityRef<M>)[] | undefined

          // Массив сущностей (attributes)
          : T[P] extends Array<Entity<infer M>> | undefined
          ? (Patch<EntityByMetaType[M]> & EntityRef<M>)[] | undefined

          // Default
          : T[P]
      }
    >

  // Patch<Entity[]> ->
  : T extends Array<infer M>
    // -> Entity
    ? M extends Entity<U>
      ? Array<Patch<M> & EntityRef<U>>
      : never

    : never
