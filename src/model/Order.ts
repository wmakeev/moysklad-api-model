import type {
  DocumentWithPositions,
  DocumentWithPositionsExpand,
  DocumentWithPositionsPatch,
  EntityRef
} from '.'
import type { OptionalNullablePartial } from '../tools'

export type OrderMetaType = 'customerorder' | 'purchaseorder'

export type OrderFields = {
  /** Планируемая дата отгрузки */
  deliveryPlannedMoment?: string

  // TODO В заказе поставщику может быть не указан склад (это во всех заказах?)
}

export type Order<T extends OrderMetaType> = DocumentWithPositions<T> &
  OrderFields

export type OrderExpand<T extends OrderMetaType> = Pick<Order<T>, 'store'> &
  DocumentWithPositionsExpand<T>

export type OrderPatch<T extends OrderMetaType> =
  DocumentWithPositionsPatch<T> &
    OptionalNullablePartial<Pick<OrderFields, 'deliveryPlannedMoment'>>
