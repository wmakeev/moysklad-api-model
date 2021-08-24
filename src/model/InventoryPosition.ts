import type { PartialNullable } from '../tools'
import type { Position, PositionPatch } from './Position'

export type InventoryPositionFields = {
  correctionAmount: number
  calculatedQuantity: number
  correctionSum: number
}

export type InventoryPosition = Position<'inventoryposition'> &
  InventoryPositionFields

export type InventoryPositionPatch = PositionPatch<'invoiceposition'> &
  PartialNullable<
    Pick<
      InventoryPositionFields,
      // TODO InventoryPosition: А все поля изменяемые?
      'correctionAmount' | 'calculatedQuantity' | 'correctionSum'
    >
  >
