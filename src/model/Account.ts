import type { Entity } from './Entity'
import type { HasUpdated } from './HasUpdated'

export interface Account extends Entity<'account'>, HasUpdated {
  /** Является ли счет основным счетом Контрагента */
  isDefault: boolean

  /** Номер счета */
  accountNumber: string

  /** Наименование банка */
  bankName?: string

  /** Адрес банка */
  bankLocation?: string

  /** Кор. счет */
  correspondentAccount?: string

  /** БИК */
  bic?: string
}
