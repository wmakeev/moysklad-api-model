import type { CollectionRef } from './CollectionRef'
import type { Company, CompanyType } from './Company'
import type { EntityRef } from './EntityRef'
import type { Legal } from './Legal'
import type { MetaType } from './MetaType'
import type { Person } from './Person'
import type { PriceType } from './PriceType'

export interface CounterpartyBase extends Company<MetaType.Counterparty> {
  /** Статус */
  state: EntityRef<MetaType.State>

  /** Группы (теги) */
  tags: string[]

  /** Контактные лица */
  contactpersons: CollectionRef<MetaType.ContactPerson>

  /** События */
  notes: EntityRef<MetaType.Note>

  /** Номер дисконтной карты */
  discountCardNumber?: string

  /** Сумма продаж */
  readonly salesAmount: number

  /** Тип цены */
  priceType?: PriceType
}

export interface CounterpartyEntrepreneur
  extends CounterpartyBase,
    Legal,
    Person {
  companyType: CompanyType.Entrepreneur

  /** КПП */
  kpp?: string

  /** ОГРНИП */
  ogrnip?: string
}

export interface CounterpartyIndividual extends CounterpartyBase, Person {
  companyType: CompanyType.Individual
}

export interface CounterparyLegal extends CounterpartyBase, Legal {
  companyType: CompanyType.Legal

  /** КПП */
  kpp?: string

  /** ОГРН */
  ogrn?: string
}

export type Counterparty =
  | CounterpartyEntrepreneur
  | CounterpartyIndividual
  | CounterparyLegal
