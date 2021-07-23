import type { AbstractDemand, DocumentWithPositions, MetaType } from '.'
import type { AbstractDemandPatch } from './AbstractDemand'

export type RetailDemandFields = {
  readonly cashSum: number

  readonly noCashSum: number
}

export type RetailDemand = AbstractDemand<'retaildemand'> & RetailDemandFields

export type RetailDemandPatch = AbstractDemandPatch<'retaildemand'>
