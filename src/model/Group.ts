import type { Entity } from './Entity'

export interface Group extends Entity<'group'> {
  /** Наименование */
  name: string

  index: number
}
