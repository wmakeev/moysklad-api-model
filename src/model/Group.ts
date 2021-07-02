import type { Entity } from './Entity'
import type { MetaType } from './MetaType'

export interface Group extends Entity<MetaType.Group> {
  /** Наименование */
  name: string

  index: number
}
