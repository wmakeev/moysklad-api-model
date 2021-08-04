import type { EntityRef, Invoice, InvoicePatch } from '.'
import type { PartialNullable } from '../tools'

export type InvoiceOutFields = {
  customerOrder?: EntityRef<'customerorder'>

  // TODO demands
  // TODO payments
}

export type InvoiceOut = Invoice<'invoiceout'> & InvoiceOutFields

export type InvoiceOutPatch = InvoicePatch<'invoiceout'> &
  PartialNullable<Pick<InvoiceOutFields, 'customerOrder'>>
