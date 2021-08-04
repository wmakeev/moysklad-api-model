import type {
  DocumentWithPositions,
  DocumentWithPositionsExpand,
  DocumentWithPositionsPatch,
  EntityRef
} from '.'
import type { PartialNullable } from '../tools'

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

export type OrderPatch<T extends OrderMetaType> =
  DocumentWithPositionsPatch<T> &
    PartialNullable<Pick<OrderFields, 'deliveryPlannedMoment' | 'store'>>
