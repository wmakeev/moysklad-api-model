import type { OptionalNullablePartial } from '../tools'
import type { Position, PositionPatch } from './Position'

export type DemandPositionFields = {
  /**
   * НДС
   */
  vat: number

  overhead: number
}

export type DemandPosition = Position<'demandposition'> & DemandPositionFields

export type DemandPositionPatch = PositionPatch<'demandposition'> &
  OptionalNullablePartial<Pick<DemandPositionFields, 'vat' | 'overhead'>>
