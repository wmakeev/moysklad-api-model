import type {
  AbstractReturn,
  AbstractReturnPatch,
  EntityRef,
  TaxSystem
} from '.'
import type { PartialNullable } from '../tools'

export type RetailSalesReturnFields = {
  retailStore: EntityRef<'retailstore'>

  retailShift: EntityRef<'retailshift'>

  taxSystem: TaxSystem

  readonly cashSum: number
  readonly noCashSum: number
  readonly qrSum: number
}

export type RetailSalesReturn = AbstractReturn<'retailsalesreturn'>

export type RetailSalesReturnPatch = AbstractReturnPatch<'retailsalesreturn'> &
  PartialNullable<
    Pick<RetailSalesReturnFields, 'retailStore' | 'retailShift' | 'taxSystem'>
  >
