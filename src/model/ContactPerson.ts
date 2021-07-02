import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { HasUpdated } from './HasUpdated'
import type { MetaType } from './MetaType'

export interface ContactPerson
  extends Entity<MetaType.ContactPerson>,
    HasUpdated {
  /** Наименование */
  name: string

  /** Описание */
  description?: string

  /** Внешний код */
  externalCode: string

  email?: string

  phone?: string

  position?: string

  agent: EntityRef<MetaType.Counterparty>
}
