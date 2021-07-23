import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat,
  HasVatPatch
} from '.'

export type InvoiceMetaType = 'invoicein' | 'invoiceout'

export type InvoiceFields = {
  paymentPlannedMoment?: string

  readonly payedSum: number

  readonly shippedSum: number
}

export type Invoice<T extends InvoiceMetaType> = DocumentWithPositions<T> &
  HasVat

export type InvoicePatch<
  T extends InvoiceMetaType
> = DocumentWithPositionsPatch<T> &
  Partial<Pick<InvoiceFields, 'paymentPlannedMoment'>> &
  HasVatPatch
