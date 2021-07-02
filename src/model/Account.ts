import type { Entity } from './Entity'
import type { HasUpdated } from './HasUpdated'
import type { MetaType } from './MetaType'

export interface Account extends Entity<MetaType.Account>, HasUpdated {
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
