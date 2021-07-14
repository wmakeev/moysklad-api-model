import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'

export interface Discount extends Entity<'discount'> {
  name: string

  active: boolean

  allProducts: boolean

  agentTags: string[]

  assortment?: EntityRef<'product'>[] // TODO Проверить
}
