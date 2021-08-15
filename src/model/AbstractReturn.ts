import type {
  DocumentWithPositions,
  DocumentWithPositionsPatch,
  EntityRef,
  HasVat
} from '.'
import type { PartialNullable } from '../tools'

export type ReturnMetaType = 'salesreturn' | 'retailsalesreturn'

export type AbstractReturnFields = {
  demand: EntityRef<'demand'>
}

export type AbstractReturn<T extends ReturnMetaType> =
  DocumentWithPositions<T> & HasVat

export type AbstractReturnPatch<T extends ReturnMetaType> =
  DocumentWithPositionsPatch<T> &
    PartialNullable<Pick<AbstractReturnFields, 'demand'>> &
    Partial<HasVat>
