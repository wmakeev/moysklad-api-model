import type { MetaType } from './MetaType'
import type { Position } from './Position'

export interface CustomerOrderPosition
  extends Position<MetaType.CustomerOrderPosition> {
  vat: number

  shipped: number

  reserve: number
}
