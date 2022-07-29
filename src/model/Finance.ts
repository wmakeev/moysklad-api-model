import type { Document, DocumentPatch, EntityRef, MetaType } from '.'
import type { OptionalNullablePartial } from '../tools'

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
  OptionalNullablePartial<
    Pick<FinanceFields, 'operations' | 'paymentPurpose' | 'vatSum'>
  >
