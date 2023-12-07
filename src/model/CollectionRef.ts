import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export type CollectionPageInfo = {
  readonly size: number
  readonly limit: number
  readonly offset: number
  readonly nextHref?: string
}

export interface CollectionRef<T extends MetaType = MetaType>
  extends EntityRef<T> {
  meta: EntityRef<T>['meta'] & CollectionPageInfo
}
