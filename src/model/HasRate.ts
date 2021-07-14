import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface HasRate {
  currency: EntityRef<'currency'>

  // TODO поля
}
