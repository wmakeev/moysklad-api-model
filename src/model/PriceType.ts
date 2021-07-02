import type { Entity } from './Entity'
import type { MetaType } from './MetaType'

export interface PriceType extends Entity<MetaType.PriceType> {
  /** Наименование */
  name: string

  /** Внешний код */
  externalCode: string
}
