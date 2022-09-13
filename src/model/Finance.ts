import type { Document, DocumentPatch, EntityRef, MetaType } from '.'
import type { OptionalNullablePartial } from '../tools'

// TODO Добавить прочие операции к которым может быть привязан платеж
export type FinaceOperationMetaType = 'customerorder' | 'demand'

export interface FinaceOperationRef extends EntityRef<FinaceOperationMetaType> {
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
  operations: FinaceOperationRef[]
}

export type Finance<T extends FinanceMetaType> = Document<T> & FinanceFields

export type FinancePatch = DocumentPatch &
  OptionalNullablePartial<
    Pick<FinanceFields, 'operations' | 'paymentPurpose' | 'vatSum'>
  >
