import type {
  CollectionRef,
  Entity,
  EntityRef,
  HasAddress,
  HasAddressPatch,
  HasAttributes,
  HasAttributesPatch,
  Owned,
  OwnedPatch
} from '.'
import type { OptionalNullablePartial } from '..'

/** Поля сущности Склад */
export type StoreFields = {
  /** Наименование */
  name: string

  /** Дата изменения */
  readonly updated: string

  code?: string

  externalCode: string

  description: string

  archived: boolean

  readonly pathName: string

  parent?: EntityRef<'store'>

  readonly zones: CollectionRef<'storezone'>

  readonly slots: CollectionRef<'slot'>
} & Owned &
  HasAttributes &
  HasAddress

/**
 * Склад
 */
export type Store = Entity<'store'> & StoreFields

export type StorePatch = OptionalNullablePartial<
  Pick<
    StoreFields,
    'name' | 'archived' | 'code' | 'description' | 'externalCode' | 'parent'
  > &
    OwnedPatch &
    HasAttributesPatch &
    HasAddressPatch
>
