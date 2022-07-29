import type { EntityRef, Invoice, InvoicePatch } from '.'
import type { OptionalNullablePartial } from '../tools'

export type InvoiceInFields = {
  purchaseOrder?: EntityRef<'purchaseorder'>

  // TODO incomingDate: DateTime
  // TODO financesOut: IDREF
  // TODO incomingNumber: String
  // TODO supplies: IDREF
}

export type InvoiceIn = Invoice<'invoicein'>

export type InvoiceInPatch = InvoicePatch<'invoicein'> &
  OptionalNullablePartial<Pick<InvoiceInFields, 'purchaseOrder'>>
