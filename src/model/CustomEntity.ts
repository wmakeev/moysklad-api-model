import type { Entity } from '.'

export type CustomEntityFields = {
  updated: string

  name: string

  code?: string

  externalCode?: string

  description?: string
}

// TODO CustomEntity: meta.metadataHref

export type CustomEntity = Entity<'customentity'> & CustomEntityFields

export type CustomEntityPatch = Partial<
  Pick<CustomEntityFields, 'code' | 'description' | 'externalCode' | 'name'>
>
