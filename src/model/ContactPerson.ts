import type { Entity, EntityRef } from '.'

export type ContactPerson = Entity<'contactperson'> & {
  /** Наименование */
  name: string

  /** Момент последнего обновления */
  readonly updated: string

  /** Описание */
  description?: string

  /** Внешний код */
  externalCode: string

  email?: string

  phone?: string

  position?: string

  agent: EntityRef<'counterparty'>
}
