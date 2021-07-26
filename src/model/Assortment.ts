import type { EntityByMetaType } from '.'

export type Assortment = EntityByMetaType[
  | 'product'
  | 'service'
  | 'bundle'
  | 'consignment'
  | 'variant'] & {
  stock: number
  reserve: number
  inTransit: number
  quantity: number
}
