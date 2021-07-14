import type { Address } from './Address'
import type { Agent } from './Agent'
import type { CollectionRef } from './CollectionRef'
import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export type CompanyMetaType = 'counterparty' | 'organization'

export enum CompanyType {
  Legal = 'legal',
  Entrepreneur = 'entrepreneur',
  Individual = 'individual'
}

export interface CompanyDiscountData {
  discount: EntityRef<'discount'>

  personalDiscount: number // double

  demandSumCorrection: number // double
}

export interface Company<T extends CompanyMetaType> extends Agent<T> {
  /** Тип Контрагента */
  companyType:
    | CompanyType.Individual
    | CompanyType.Entrepreneur
    | CompanyType.Legal

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
