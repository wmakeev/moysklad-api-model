import type { Entity, EntityRef, Owned, OwnedPatch, TaxSystem } from '.'
import type { PartialNullable } from '../tools'

export type ProductFolderFields = Owned & {
  name: string

  readonly updated: string

  description?: string

  code?: string

  externalCode?: string

  archived: boolean

  readonly pathName: string

  /** НДС % */
  vat: number

  /** Реальный НДС % */
  readonly effectiveVat: number

  productFolder?: EntityRef<'productfolder'>

  /** Код системы налогообложения. */
  taxSystem?: TaxSystem
}

export type ProductFolder = Entity<'productfolder'> & ProductFolderFields

export type ProductFolderPatch = Partial<
  Pick<ProductFolderFields, 'name' | 'archived'>
> &
  PartialNullable<
    Pick<
      ProductFolderFields,
      | 'description'
      | 'code'
      | 'externalCode'
      | 'vat'
      | 'productFolder'
      | 'taxSystem'
    >
  > &
  OwnedPatch
