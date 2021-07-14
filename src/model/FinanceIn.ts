import type { Finance, FinancePatch } from './Finance'

export type FinanceInMetaType = 'paymentin' | 'cashin'

export type FinanceInFields = {
  /** Дата входящего документа */
  incomingDate?: string

  /** Номер входящего документа */
  incomingNumber?: string
}

export type FinanceIn<T extends FinanceInMetaType> = Finance<T> &
  FinanceInFields

export type FinanceInPatch = FinancePatch & FinanceInFields
