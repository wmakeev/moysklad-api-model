import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { HasAttributes } from './HasAttributes'
import type { HasCreated } from './HasCreated'
import type { HasFiles } from './HasFiles'
import type { HasProject } from './HasProject'
import type { HasRate } from './HasRate'
import type { HasState } from './HasState'
import type { HasUpdated } from './HasUpdated'
import type { MetaType } from './MetaType'
import type { Owned } from './Owned'

export type DocumentMetaType =
  | MetaType.CustomerOrder
  | MetaType.Demand
  | MetaType.PurchaseOrder
// TODO Описать остальные

export interface Document<T extends DocumentMetaType>
  extends Entity<T>,
    HasCreated,
    HasUpdated,
    HasState,
    HasProject,
    HasRate,
    HasAttributes,
    HasFiles,
    Owned {
  /** Наименование документа */
  name: string

  /** Проведено */
  applicable: boolean

  /** Комментарий */
  description?: string

  /** Внешний код */
  externalCode?: string

  /** Дата документа */
  moment: string

  /** Дата последнего удаления документа в корзину */
  deleted?: string

  readonly syncId?: string

  /** Договор */
  contract?: EntityRef<MetaType.Contract>

  /** Сумма документа */
  sum: number

  // TODO agent: общий тип можно экспандить только по пересечению

  /** Контрагент */
  agent: EntityRef<MetaType.Counterparty | MetaType.Organization>

  /** Счет контрагента */
  agentAccount?: EntityRef<MetaType.Account>

  /** Организация */
  organization: EntityRef<MetaType.Organization>

  /** Счет организации */
  organizationAccount?: EntityRef<MetaType.Account>
}

/** Поля которе могут быть expand */
export type DocumentExpand<T extends DocumentMetaType> = Pick<
  Document<T>,
  | 'agent'
  | 'agentAccount'
  | 'attributes'
  | 'contract'
  | 'currency'
  | 'files'
  | 'group'
  | 'organization'
  | 'organizationAccount'
  | 'owner'
  | 'project'
  | 'state'
>
