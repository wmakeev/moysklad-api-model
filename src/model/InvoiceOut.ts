import type { EntityRef, Invoice, InvoicePatch } from '.'

export type InvoiceOutFields = {
  customerOrder?: EntityRef<'customerorder'>

  // TODO demands
  // TODO payments
}

export type InvoiceOut = Invoice<'invoiceout'> & InvoiceOutFields

export type InvoiceOutPatch = InvoicePatch<'invoiceout'> &
  Partial<Pick<InvoiceOutFields, 'customerOrder'>>
