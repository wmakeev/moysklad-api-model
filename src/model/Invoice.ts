import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat
} from '.'
import type { OptionalNullablePartial } from '../tools'

export type InvoiceMetaType = 'invoicein' | 'invoiceout'

export type InvoiceFields = {
  paymentPlannedMoment?: string

  readonly payedSum: number

  readonly shippedSum: number
}

export type Invoice<T extends InvoiceMetaType> = DocumentWithPositions<T> &
  InvoiceFields &
  HasVat

export type InvoicePatch<T extends InvoiceMetaType> =
  DocumentWithPositionsPatch<T> &
    OptionalNullablePartial<Pick<InvoiceFields, 'paymentPlannedMoment'>> &
    Partial<HasVat>
