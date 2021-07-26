import type { Entity } from './Entity'

export type PriceType = Omit<Entity<'pricetype'>, 'accountId'> & {
  /** Наименование */
  name: string

  /** Внешний код */
  externalCode: string
}
