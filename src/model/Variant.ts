import type {
  Barcode,
  Characteristic,
  CollectionRef,
  Entity,
  EntityRef,
  SalePrice
} from '.'

export type Variant = Entity<'variant'> & {
  name: string

  code?: string

  externalCode: string

  archived: boolean

  characteristics: Characteristic[]

  images: CollectionRef<'image'>

  salePrices: SalePrice[]

  barcodes?: Barcode[]

  discountProhibited: boolean

  product: EntityRef<'product'>
}
