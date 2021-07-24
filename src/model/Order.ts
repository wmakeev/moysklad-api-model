import type {
  DocumentWithPositions,
  DocumentWithPositionsExpand,
  DocumentWithPositionsPatch,
  EntityRef
} from '.'

export type OrderMetaType = 'customerorder' | 'purchaseorder'

export type OrderFields = {
  /** Планируемая дата отгрузки */
  deliveryPlannedMoment?: string

  /** Склад */
  store?: EntityRef<'store'>
}

export type Order<T extends OrderMetaType> = DocumentWithPositions<T> &
  OrderFields

export type OrderExpand<T extends OrderMetaType> = Pick<Order<T>, 'store'> &
  DocumentWithPositionsExpand<T>

export type OrderPatch<
  T extends OrderMetaType
> = DocumentWithPositionsPatch<T> &
  Partial<Pick<OrderFields, 'deliveryPlannedMoment' | 'store'>>
