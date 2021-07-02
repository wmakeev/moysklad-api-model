import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { HasCreated } from './HasCreated'
import type { MetaType } from './MetaType'

export interface AgentNote extends Entity<MetaType.Note>, HasCreated {
  description?: string

  agent: EntityRef<MetaType.Counterparty>

  author: EntityRef<MetaType.Employee>
}
