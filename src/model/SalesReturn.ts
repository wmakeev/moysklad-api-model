import type { AbstractReturn, AbstractReturnPatch, EntityRef } from '.'

export type SalesReturnFields = {
  readonly payedSum: number
}

export type SalesReturn = AbstractReturn<'salesreturn'>

export type SalesReturnPatch = AbstractReturnPatch<'salesreturn'>
// & PartialNullable<Pick<SalesReturnFields, 'demand'>>
