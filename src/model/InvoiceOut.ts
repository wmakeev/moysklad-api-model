import type { DocumentWithPositions, HasVat, MetaType } from '.'

export type InvoiceOut = DocumentWithPositions<'invoiceout'> & HasVat
