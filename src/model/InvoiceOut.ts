import type { EntityRef, Invoice, InvoicePatch } from '.'
import type { OptionalNullablePartial } from '../tools'

export type InvoiceOutFields = {
  customerOrder?: EntityRef<'customerorder'>

  // TODO demands
  // TODO payments
}

export type InvoiceOut = Invoice<'invoiceout'> & InvoiceOutFields

export type InvoiceOutPatch = InvoicePatch<'invoiceout'> &
  OptionalNullablePartial<Pick<InvoiceOutFields, 'customerOrder'>>
