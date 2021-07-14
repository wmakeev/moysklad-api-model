import type { AttributePatch } from '.'
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
import type { Owned } from './Owned'

// TODO | 'processingplan'
// TODO | 'processing'?

export type DocumentMetaType =
  | 'cashin'
  | 'cashout'
  | 'commissionreportin'
  | 'commissionreportout'
  | 'consignment'
  | 'contract'
  | 'customerorder'
  | 'demand'
  | 'enter'
  | 'facturein'
  | 'factureout'
  | 'internalorder'
  | 'inventory'
  | 'invoicein'
  | 'invoiceout'
  | 'loss'
  | 'move'
  | 'paymentin'
  | 'paymentout'
  | 'pricelist'
  | 'processingorder'
  | 'purchaseorder'
  | 'purchasereturn'
  | 'retaildemand'
  | 'retaildrawercashin'
  | 'retaildrawercashout'
  | 'retailsalesreturn'
  | 'salesreturn'
  | 'supply'

export type DocumentFieds = HasCreated &
  HasUpdated &
  HasDeleted &
  HasState &
  HasProject &
  HasRate &
  HasAttributes &
  HasFiles &
  Owned & {
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
    contract?: EntityRef<'contract'>

    /** Сумма документа */
    readonly sum: number

    // TODO agent: общий тип можно экспандить только по пересечению

    /** Контрагент */
    agent: EntityRef<'counterparty' | 'organization'>

    /** Счет контрагента */
    agentAccount?: EntityRef<'account'>

    /** Организация */
    organization: EntityRef<'organization'>

    /** Счет организации */
    organizationAccount?: EntityRef<'account'>
  }

export type Document<T extends DocumentMetaType> = Entity<T> & DocumentFieds

// TODO Почему объект а не Union?
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

export type DocumentPatch = Partial<
  Pick<
    DocumentFieds,
    | 'agent'
    | 'agentAccount'
    | 'applicable'
    | 'contract'
    | 'currency'
    | 'description'
    | 'externalCode'
    | 'files'
    | 'group'
    | 'moment'
    | 'name'
    | 'organization'
    | 'organizationAccount'
    | 'owner'
    | 'project'
    | 'shared'
    | 'state'
  > & {
    attributes: AttributePatch[]
  }
>
