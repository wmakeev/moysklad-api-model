import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  HasVat,
  HasVatPatch
} from '.'
import type { EntityRef } from './EntityRef'

export type InvoiceOutFields = {
  customerOrder?: EntityRef<'customerorder'>
}

export type InvoiceOut = DocumentWithPositions<'invoiceout'> &
  HasVat &
  InvoiceOutFields

export type InvoiceOutPatch = DocumentWithPositionsPatch<'invoiceout'> &
  HasVatPatch &
  Partial<Pick<InvoiceOutFields, 'customerOrder'>>
