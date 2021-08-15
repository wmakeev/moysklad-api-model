import type { EntityRef, Position, PositionPatch } from '.'
import type { PartialNullable } from '../tools'

export type SalesReturnPositionFields = {
  /**
   * НДС
   */
  vat: number

  // TODO vatEnabled: разобраться с где и как отмечается в позициях
  vatEnabled: boolean

  /** ГТД (только для salesreturn) */
  gtd?: {
    name: string
  }

  /** Страна (только для salesreturn) */
  country?: EntityRef<'country'>
}

export type SalesReturnPosition = Position<'salesreturnposition'> &
  SalesReturnPositionFields

export type SalesReturnPositionPatch = PositionPatch<'demandposition'> &
  PartialNullable<
    Pick<SalesReturnPositionFields, 'vat' | 'vatEnabled' | 'gtd' | 'country'>
  >
