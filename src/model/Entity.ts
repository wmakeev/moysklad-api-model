import type { MetaType } from './MetaType'
import type { EntityRef } from './EntityRef'

export interface Entity<T extends MetaType = MetaType> extends EntityRef<T> {
  /** Идентификатор сущности */
  id: string

  /** ID учетной записи */
  readonly accountId: string
}
