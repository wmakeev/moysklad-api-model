import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export type PositionMetaType =
  | MetaType.CustomerOrderPosition
  | MetaType.DemandPosition
  | MetaType.PurchaseOrderPosition

export type PositionTypeByDocument = {
  [MetaType.CustomerOrder]: MetaType.CustomerOrderPosition
  [MetaType.Demand]: MetaType.DemandPosition
  [MetaType.RetailDemand]: MetaType.DemandPosition
  [MetaType.PurchaseOrder]: MetaType.PurchaseOrderPosition
}

export interface Position<T extends PositionMetaType> extends Entity<T> {
  /** Кол-во */
  quantity: number

  /** Цена */
  price: number

  /** Скидка */
  discount: number

  /** Ассортимент */
  assortment: EntityRef
}
