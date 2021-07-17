import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat,
  HasVatPatch
} from '.'

export type InvoiceIn = DocumentWithPositions<'invoicein'> & HasVat

export type InvoiceInPatch = DocumentWithPositionsPatch<'invoicein'> &
  HasVatPatch
