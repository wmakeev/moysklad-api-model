import type {
  Attribute,
  AttributePatch,
  Entity,
  EntityRef,
  Owned,
  OwnedPatch,
  Rate
} from '.'
import type { PartialNullable } from '../tools'

type ContractTypeFileds =
  | {
      /**
       * Тип Договора.
       *
       * Возможные значения:
       * - Договор комиссии
       * - Договор купли-продажи
       */
      contractType: 'Sales'
    }
  | {
      contractType: 'Commission'

      /**
       * Тип Вознаграждения.
       *
       * Указывается когда `contractType` = `Commission`
       *
       * Возможные значения:
       * - Процент от суммы продажи
       * - Не рассчитывать
       * */
      rewardType: 'None'
    }
  | {
      contractType: 'Commission'

      /**
       * Тип Вознаграждения.
       *
       * Указывается когда `contractType` = `Commission`
       *
       * Возможные значения:
       * - Процент от суммы продажи
       * - Не рассчитывать
       * */
      rewardType: 'PercentOfSales'

      /** Вознаграждение в процентах (от 0 до 100) */
      rewardPercent: number
    }

type ContractFields = ContractTypeFileds & {
  readonly updated: string

  name: string

  description?: string

  code?: string

  externalCode?: string

  archived: boolean

  moment: string

  /** Сумма Договора */
  sum: number

  ownAgent: EntityRef<'organization'>

  agent: EntityRef<'counterparty' | 'organization'>

  state?: EntityRef<'state'>

  organizationAccount: EntityRef<'account'>

  agentAccount?: EntityRef<'account'>

  rate: Rate

  attributes: Attribute[]
}

export type Contract = Entity<'contract'> & Owned & ContractFields

export type ContractPatch = PartialNullable<
  Pick<
    ContractFields,
    | 'name'
    | 'description'
    | 'code'
    | 'externalCode'
    | 'archived'
    | 'ownAgent'
    | 'agent'
    | 'state'
    | 'organizationAccount'
    | 'agentAccount'
    | 'rate'
  > &
    ContractTypeFileds
> & {
  attributes?: AttributePatch[]
} & OwnedPatch
