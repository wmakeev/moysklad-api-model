import type { DocumentWithPositions, MetaType } from '.'

export interface RetailDemand extends DocumentWithPositions<'retaildemand'> {
  readonly cashSum: number

  readonly noCashSum: number
}
