import type { Entity, Owned, OwnedPatch } from '.'
import type { OptionalNullablePartial } from '../tools'

/** Поля сущности Зона склада */
export type UomFields = {
  /** Наименование */
  name: string

  /** Код */
  code: string

  /** Внешний код */
  externalCode: string

  description: string

  /** Дата изменения */
  readonly updated: string
} & Owned

/**
 * Зона склада
 */
export type Uom = Entity<'uom'> & UomFields

export type UomPatch = OptionalNullablePartial<
  Pick<UomFields, 'code' | 'description' | 'externalCode' | 'name'>
> &
  OwnedPatch
