import type { EntityByMetaType } from '.'

export type AssortmentMetaType =
  | 'product'
  | 'service'
  | 'bundle'
  | 'consignment'
  | 'variant'

export type Assortment = EntityByMetaType[AssortmentMetaType] & {
  stock: number
  reserve: number
  inTransit: number
  quantity: number
}
