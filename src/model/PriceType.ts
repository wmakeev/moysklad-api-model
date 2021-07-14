import type { Entity } from './Entity'

export interface PriceType extends Entity<'pricetype'> {
  /** Наименование */
  name: string

  /** Внешний код */
  externalCode: string
}
