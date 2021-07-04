import type { DocumentWithPositions, MetaType } from '.'

export interface RetailDemand
  extends DocumentWithPositions<MetaType.RetailDemand> {
  readonly cashSum: number

  readonly noCashSum: number
}
