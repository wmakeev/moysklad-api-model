import type { Address, Agent, CollectionRef, EntityRef } from '.'

export type CompanyMetaType = 'counterparty' | 'organization'

export const companyType = {
  Legal: 'legal',
  Entrepreneur: 'entrepreneur',
  Individual: 'individual'
} as const

export type CompanyType = typeof companyType[keyof typeof companyType]

export interface CompanyDiscountData {
  discount: EntityRef<'discount'>

  personalDiscount: number // double

  demandSumCorrection: number // double
}

export interface Company<T extends CompanyMetaType> extends Agent<T> {
  code: string

  /** Тип Контрагента */
  companyType: CompanyType

  /** Счета */
  accounts: CollectionRef<'account'>

  /** Полное наименование */
  legalTitle?: string

  /** Юридический адрес (строка) */
  legalAddress?: string

  /** Юридический адрес (объект) */
  legalAddressFull?: Address

  /** Фактический адрес (строка) */
  actualAddress?: string

  /** Фактический адрес (объект) */
  actualAddressFull?: Address

  /** Номер факса */
  fax?: string

  /**
   * **Скидки**
   *
   * Массив метаданных скидок. Массив может содержать персональные и
   * накопительные скидки. Персональная скидка выводится, если хотя бы
   * раз изменялся процент скидки для контрагента, значение будет указано
   * в поле personalDiscount
   * */
  readonly discounts: CompanyDiscountData[]
}
