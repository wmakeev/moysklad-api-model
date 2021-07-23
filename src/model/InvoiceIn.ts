import type { EntityRef, Invoice, InvoicePatch } from '.'

export type InvoiceInFields = {
  purchaseOrder?: EntityRef<'purchaseorder'>

  // TODO incomingDate: DateTime
  // TODO financesOut: IDREF
  // TODO incomingNumber: String
  // TODO supplies: IDREF
}

export type InvoiceIn = Invoice<'invoicein'>

export type InvoiceInPatch = InvoicePatch<'invoicein'> &
  Partial<Pick<InvoiceInFields, 'purchaseOrder'>>
