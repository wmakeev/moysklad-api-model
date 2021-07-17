import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat,
  HasVatPatch
} from '.'

export type InvoiceOut = DocumentWithPositions<'invoiceout'> & HasVat

export type InvoiceOutPatch = DocumentWithPositionsPatch<'invoiceout'> &
  HasVatPatch
