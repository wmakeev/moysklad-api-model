import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  EntityRef,
  HasVat
} from '.'
import type { OptionalNullablePartial } from '../tools'

export type DemandMetaType = 'demand' | 'retaildemand'

export type AbstractDemandFields = {
  customerOrder: EntityRef<'customerorder'>

  // TODO facture: IDREF
  // TODO invoicesOutUuid: IDREF
  // TODO paymentsUuid: IDREF
  // TODO salesReturnsUuid: IDREF
  // TODO shipmentOut: ShipmentOut
}

export type AbstractDemand<T extends DemandMetaType> =
  DocumentWithPositions<T> & HasVat

export type AbstractDemandPatch<T extends DemandMetaType> =
  DocumentWithPositionsPatch<T> &
    OptionalNullablePartial<Pick<AbstractDemandFields, 'customerOrder'>> &
    Partial<HasVat>
