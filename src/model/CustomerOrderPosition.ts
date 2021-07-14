import type { Position, PositionPatch } from './Position'

export type CustomerOrderPositionFields = {
  /**
   * НДС
   */
  vat: number

  shipped: number

  /**
   * Зарезервированное кол-во товара в позиции
   */
  reserve: number
}

export type CustomerOrderPosition = Position<'customerorderposition'> &
  CustomerOrderPositionFields

export type CustomerOrderPositionPatch = PositionPatch<'customerorderposition'> &
  Partial<Pick<CustomerOrderPositionFields, 'vat' | 'reserve' | 'shipped'>>
