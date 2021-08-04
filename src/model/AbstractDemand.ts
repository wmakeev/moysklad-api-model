import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  EntityRef,
  HasVat
} from '.'
import type { PartialNullable } from '../tools'

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
    PartialNullable<Pick<AbstractDemandFields, 'customerOrder'>> &
    Partial<HasVat>
