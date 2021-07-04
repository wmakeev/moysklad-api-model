import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface Discount extends Entity<MetaType.Discount> {
  name: string

  active: boolean

  allProducts: boolean

  agentTags: string[]

  assortment?: EntityRef<MetaType.Product>[] // TODO Проверить
}
