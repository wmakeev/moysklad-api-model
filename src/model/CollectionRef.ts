import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export type CollectionPageInfo = {
  size: number
  limit: number
  offset: number
  hextHref?: string
}

export interface CollectionRef<T extends MetaType = MetaType>
  extends EntityRef<T> {
  meta: EntityRef<T>['meta'] & CollectionPageInfo
}
