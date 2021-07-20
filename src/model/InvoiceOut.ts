import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat,
  HasVatPatch
} from '.'
import type { EntityRef } from './EntityRef'

export type InvoiceOutFields = {
  customerOrder?: EntityRef<'customerorder'>
  readonly payedSum: number
  readonly shippedSum: number
}

export type InvoiceOut = DocumentWithPositions<'invoiceout'> &
  HasVat &
  InvoiceOutFields

export type InvoiceOutPatch = DocumentWithPositionsPatch<'invoiceout'> &
  HasVatPatch &
  Partial<Pick<InvoiceOutFields, 'customerOrder'>>
