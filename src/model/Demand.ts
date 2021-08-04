import type { AbstractDemand, AbstractDemandPatch } from './AbstractDemand'

export type DemandFields = {
  // TODO extension: DemandExtension
  // TODO overhead: MoneyAmount
  // TODO overheadDistribution: OverheadDistribution
}

export type Demand = AbstractDemand<'demand'>

export type DemandPatch = AbstractDemandPatch<'demand'>
// & PartialNullable<Pick<DemandFields, ''>>
