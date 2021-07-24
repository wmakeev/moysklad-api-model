import type { Entity } from '.'

export type Account = Entity<'account'> & {
  /** Момент последнего обновления */
  readonly updated: string

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
