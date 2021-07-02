import type { Entity } from './Entity'
import type { HasAttributes } from './HasAttributes'
import type { HasCreated } from './HasCreated'
import type { HasUpdated } from './HasUpdated'
import type { MetaType } from './MetaType'
import type { Owned } from './Owned'

export type AgentMetaType =
  | MetaType.Employee
  | MetaType.Counterparty
  | MetaType.Organization

export interface Agent<T extends AgentMetaType>
  extends Entity<T>,
    Owned,
    HasCreated,
    HasUpdated,
    HasAttributes {
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
}
