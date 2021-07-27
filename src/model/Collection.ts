import type { CollectionRef, EntityRef, MetaType } from '.'

export interface Collection<T extends EntityRef<MetaType>>
  extends CollectionRef<T['meta']['type']> {
  rows: T[]
}
