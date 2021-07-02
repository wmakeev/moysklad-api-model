import type { CollectionRef } from './CollectionRef'
import type { EntityByMetaType, MetaType } from './MetaType'

export interface Collection<T extends MetaType = MetaType>
  extends CollectionRef<T> {
  rows: EntityByMetaType[T][]
}
