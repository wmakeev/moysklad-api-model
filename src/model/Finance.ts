import type { Document, DocumentPatch } from './Document'
import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

// TODO FinaceOperation: наложить ограничения на возможные MetaType
export interface FinaceOperation extends EntityRef<MetaType> {
  /** Связанная сумма из платежа */
  linkedSum: number
}

export type FinanceMetaType = 'paymentin' | 'cashin' | 'paymentout' | 'cashout'

export type FinanceFields = {
  /** Назначение платежа */
  paymentPurpose?: string

  /** Включая НДС */
  vatSum: number

  /** Оплаченные документы */
  operations: FinaceOperation[]
}

export type Finance<T extends FinanceMetaType> = Document<T> & FinanceFields

export type FinancePatch = DocumentPatch &
  Partial<Pick<FinanceFields, 'operations' | 'paymentPurpose' | 'vatSum'>>
