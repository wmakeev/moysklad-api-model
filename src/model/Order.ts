import type { MetaType } from './MetaType'
import type {
  DocumentWithPositions,
  DocumentWithPositionsExpand
} from './DocumentWithPositions'
import type { HasStore } from './HasStore'

export type OrderMetaType = MetaType.CustomerOrder | MetaType.PurchaseOrder

export interface Order<T extends OrderMetaType>
  extends DocumentWithPositions<T>,
    HasStore {
  /** Планируемая дата отгрузки */
  deliveryPlannedMoment?: string
}

export type OrderExpand<T extends OrderMetaType> = Pick<Order<T>, 'store'> &
  DocumentWithPositionsExpand<T>
