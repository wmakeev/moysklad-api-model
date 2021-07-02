import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface CollectionRef<T extends MetaType = MetaType>
  extends EntityRef<T> {
  meta: EntityRef<T>['meta'] & {
    size: number
    limit: number
    offset: number
  }
}
