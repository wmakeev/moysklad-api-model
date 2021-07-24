import type { Entity, EntityRef } from '.'

export type AgentNote = Entity<'note'> & {
  /** Дата создания сущности */
  readonly created: string

  description?: string

  agent: EntityRef<'counterparty'>

  author: EntityRef<'employee'>
}
