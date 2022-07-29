import type {
  AbstractReturn,
  AbstractReturnPatch,
  EntityRef,
  TaxSystem
} from '.'
import type { OptionalNullablePartial } from '../tools'

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
  OptionalNullablePartial<
    Pick<RetailSalesReturnFields, 'retailStore' | 'retailShift' | 'taxSystem'>
  >
