import type { Entity } from './Entity'

/** Поля сущности Зона склада */
export type StoreZoneFields = {
  /** Наименование */
  name: string

  /** Дата изменения */
  readonly updated: string

  externalCode: string
}

/**
 * Зона склада
 */
export type StoreZone = Entity<'storezone'> & StoreZoneFields
