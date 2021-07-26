import type {
  Attribute,
  AttributePatch,
  CollectionRef,
  Entity,
  EntityRef,
  Rate,
  Owned
} from '.'
import type { OwnedPatch } from './Owned'

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

export type DocumentFieds = {
  /** Наименование документа */
  name: string

  /** Проведено */
  applicable: boolean

  /** Дата создания сущности */
  readonly created: string

  /** Момент последнего обновления */
  readonly updated: string

  /** Комментарий */
  description?: string

  /** Внешний код */
  externalCode?: string

  /** Дата документа */
  moment: string

  /** Статус документа */
  state?: EntityRef<'state'>

  readonly syncId?: string

  /** Договор */
  contract?: EntityRef<'contract'>

  /** Проект */
  project?: EntityRef<'project'>

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

  /** Спосок пользовательских полей */
  attributes?: Attribute[]

  /** Валюта документа */
  rate: Rate

  /** Вложенные файлы (максимальное кол-во файлов - 100) */
  files?: CollectionRef<'files'>

  /** Момент последнего удаления (помещения в корзину) */
  readonly deleted?: string
}

export type Document<T extends DocumentMetaType> = Entity<T> &
  DocumentFieds &
  Owned

// TODO Почему объект а не Union?
/** Поля которе могут быть expand */
export type DocumentExpand<T extends DocumentMetaType> = Pick<
  Document<T>,
  | 'agent'
  | 'agentAccount'
  | 'attributes'
  | 'contract'
  | 'rate'
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
    | 'rate'
    | 'description'
    | 'externalCode'
    | 'files'
    | 'moment'
    | 'name'
    | 'organization'
    | 'organizationAccount'
    | 'project'
    | 'state'
  > & {
    attributes: AttributePatch[]
  } & OwnedPatch
>
