import type { CollectionRef } from './CollectionRef'
import type { Company, CompanyType } from './Company'
import type { EntityRef } from './EntityRef'
import type { Legal } from './Legal'
import type { Person } from './Person'
import type { PriceType } from './PriceType'

export interface CounterpartyBase extends Company<'counterparty'> {
  /** Статус */
  state: EntityRef<'state'>

  /** Группы (теги) */
  tags: string[]

  /** Контактные лица */
  contactpersons: CollectionRef<'contactperson'>

  /** События */
  notes: EntityRef<'note'>

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
