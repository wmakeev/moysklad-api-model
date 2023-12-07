import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'

/** Поля сущности Ячейка */
export type SlotFields = {
  /** Наименование */
  name: string

  /** Дата изменения */
  readonly updated: string

  externalCode: string

  readonly zone?: EntityRef<'storezone'>
}

/**
 * Ячейка склада
 */
export type Slot = Entity<'slot'> & SlotFields
