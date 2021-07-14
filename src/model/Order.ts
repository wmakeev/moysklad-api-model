import type {
  DocumentWithPositions,
  DocumentWithPositionsExpand,
  DocumentWithPositionsPatch
} from './DocumentWithPositions'
import type { HasStore } from './HasStore'

export type OrderMetaType = 'customerorder' | 'purchaseorder'

export type OrderFields = {
  /** Планируемая дата отгрузки */
  deliveryPlannedMoment?: string
}

export type Order<T extends OrderMetaType> = DocumentWithPositions<T> &
  HasStore &
  OrderFields

export type OrderExpand<T extends OrderMetaType> = Pick<Order<T>, 'store'> &
  DocumentWithPositionsExpand<T>

export type OrderPatch<
  T extends OrderMetaType
> = DocumentWithPositionsPatch<T> &
  Partial<Pick<OrderFields, 'deliveryPlannedMoment'>>
