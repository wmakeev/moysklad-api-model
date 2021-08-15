import type { PartialNullable } from '../tools'
import type { Entity } from './Entity'
import type { EntityPatchRef, EntityRef } from './EntityRef'

export type PositionMetaType =
  | 'commissionreportinposition'
  | 'commissionreportoutposition'
  | 'customerorderposition'
  | 'demandposition'
  | 'enterposition'
  | 'internalorderposition'
  | 'inventoryposition'
  | 'invoiceposition'
  | 'lossposition'
  | 'moveposition'
  | 'processingorderposition'
  | 'purchaseorderposition'
  | 'purchasereturnposition'
  | 'salesreturnposition'
  | 'supplyposition'

// TODO Нужно ли сделать динамически `${MetaType}position`?
export type DocumentPositionType = {
  commissionreportin: 'commissionreportinposition'
  commissionreportout: 'commissionreportoutposition'
  customerorder: 'customerorderposition'
  demand: 'demandposition'
  enter: 'enterposition'
  internalorder: 'internalorderposition'
  inventory: 'inventoryposition'
  invoicein: 'invoiceposition'
  invoiceout: 'invoiceposition'
  loss: 'lossposition'
  move: 'moveposition'
  processingorder: 'processingorderposition'
  purchaseorder: 'purchaseorderposition'
  purchasereturn: 'purchasereturnposition'
  retaildemand: 'demandposition'
  salesreturn: 'salesreturnposition'
  retailsalesreturn: 'salesreturnposition'
  supply: 'supplyposition'
}

export interface Position<T extends PositionMetaType> extends Entity<T> {
  /** Кол-во */
  quantity: number

  /** Цена */
  price: number

  /** Скидка */
  discount: number

  // TODO Position.assortment: Описать типы
  /** Ассортимент */
  assortment: EntityRef<
    'product' | 'service' | 'bundle' | 'consignment' | 'variant'
  >
}

export type PositionPatch<T extends PositionMetaType> = Partial<
  EntityPatchRef<T> & Pick<Position<T>, 'quantity' | 'price'>
> &
  PartialNullable<Pick<Position<T>, 'assortment' | 'discount'>>
