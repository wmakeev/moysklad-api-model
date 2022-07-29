import type { OptionalNullablePartial } from '../tools'
import type { Position, PositionPatch } from './Position'

export type InvoicePositionFields = {
  /**
   * НДС
   */
  vat: number
}

export type InvoicePosition = Position<'invoiceposition'> &
  InvoicePositionFields

export type InvoicePositionPatch = PositionPatch<'invoiceposition'> &
  OptionalNullablePartial<Pick<InvoicePositionFields, 'vat'>>
