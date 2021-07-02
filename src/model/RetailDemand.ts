import type { DocumentWithPositions, MetaType } from '.'

export interface RetailDemand
  extends DocumentWithPositions<MetaType.RetailDemand> {
  cashSum: number
  noCashSum: number
}
