import type { Attribute, Entity, Owned } from '.'

export type AgentMetaType = 'employee' | 'counterparty' | 'organization'

export interface Agent<T extends AgentMetaType> extends Entity<T>, Owned {
  /** Дата создания сущности */
  readonly created: string

  /** Момент последнего обновления */
  readonly updated: string

  /** Наименование */
  name: string

  /** Комментарий */
  description?: string

  /** Внешний код */
  externalCode: string

  /** Архивирован */
  archived: boolean

  /** ИНН */
  inn?: string

  /** Email */
  email?: string

  /** Номер телефона */
  phone?: string

  /** Спосок пользовательских полей */
  attributes?: Attribute[]
}
