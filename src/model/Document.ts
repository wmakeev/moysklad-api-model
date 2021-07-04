import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { HasAttributes } from './HasAttributes'
import type { HasCreated } from './HasCreated'
import type { HasDeleted } from './HasDeleted'
import type { HasFiles } from './HasFiles'
import type { HasProject } from './HasProject'
import type { HasRate } from './HasRate'
import type { HasState } from './HasState'
import type { HasUpdated } from './HasUpdated'
import type { MetaType } from './MetaType'
import type { Owned } from './Owned'

// TODO Перечислить все документы
export type DocumentMetaType =
  | MetaType.CustomerOrder
  | MetaType.Demand
  | MetaType.RetailDemand
  | MetaType.PurchaseOrder
  | MetaType.InvoiceOut
  | MetaType.InvoiceIn

export interface Document<T extends DocumentMetaType>
  extends Entity<T>,
    HasCreated,
    HasUpdated,
    HasDeleted,
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

  readonly syncId?: string

  /** Договор */
  contract?: EntityRef<MetaType.Contract>

  /** Сумма документа */
  readonly sum: number

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
