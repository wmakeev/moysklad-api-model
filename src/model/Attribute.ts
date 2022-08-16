import type { NullablePartial } from '../tools'
import type { Entity } from './Entity'
import type { EntityPatchRef, EntityRef } from './EntityRef'
import type { mediaType, MediaType } from './MediaType'

export const simpleAttributeTypes = [
  'string',
  'long',
  'time',
  'double',
  'boolean',
  'text',
  'link'
] as const

/** Типы атрибутов, значение которых является сущностью (ссылкой на сущность) */
export type SimpleAttributeType = typeof simpleAttributeTypes[number]

export const embeddedEntityAttributeTypes = [
  'organization',
  'counterparty',
  'employee',
  'contract',
  'product',
  'project',
  'store'
] as const

/** Типы атрибутов, значение которых является сущностью (ссылкой на сущность) */
export type EmbeddedEntityRefAttributeType =
  typeof embeddedEntityAttributeTypes[number]

/** Типы атрибутов */
export type AttributeType =
  // Base type
  | SimpleAttributeType

  // Embedded entity
  | EmbeddedEntityRefAttributeType

  // File entity
  | 'file'

  // Custom entity
  | 'customentity'

// TODO Нужна отдельная мапа EntityRefAttributeType -> MetaType
// Если перевести на union, то нужно ли?

// file: {
//       filename: string
//       content: string
//     }

export type AttributeValueByTypeMap = {
  // Base type
  string: { value: string }

  long: { value: number }

  time: { value: string }

  file: {
    /** Наименование файла */
    value: string

    /** Ссылка для скачивания файла */
    download: {
      href: string
      mediaType: typeof mediaType.ApplicationOctetStream
    }
  }

  double: { value: number }

  boolean: { value: boolean }

  text: { value: string }

  link: { value: string }

  // Embedded entity
  organization: { value: EntityRef<'organization'> }

  counterparty: { value: EntityRef<'counterparty'> }

  employee: { value: EntityRef<'employee'> }

  contract: { value: EntityRef<'contract'> }

  product: { value: EntityRef<'product'> }

  project: { value: EntityRef<'project'> }

  store: { value: EntityRef<'store'> }

  customentity: {
    value: EntityRef<'customentity'> & {
      readonly name: string
    }
  }
}

// prettier-ignore

export type Attribute<T extends AttributeType = AttributeType> =
  Entity<'attributemetadata'> &
    (
      T extends SimpleAttributeType | EmbeddedEntityRefAttributeType | 'customentity'
        ? {
          /** Наименование пользовательского поля */
          readonly name: string

          /** Тип значения пользовательского поля */
          readonly type: T

          readonly value: AttributeValueByTypeMap[T]['value']
        }

      : T extends 'file'
        ? {
          /** Наименование пользовательского поля */
          readonly name: string

          /** Тип значения пользовательского поля */
          readonly type: T

          readonly value: AttributeValueByTypeMap[T]['value']

          readonly download: AttributeValueByTypeMap[T]['download']
        }

      : never
    )

// TODO Попробовать оптимизировать см. #dhg06qfl

// prettier-ignore

export type AttributePatch<T extends AttributeType = AttributeType> =
  EntityPatchRef<'attributemetadata'> & (
    T extends 'customentity'
      ?  {
        /** Наименование пользовательского поля */
        name?: string

        /** Тип значения пользовательского поля */
        type?: T

        value: EntityRef<T> | { name: string } | null
      }

    : T extends 'file'
      ? EntityPatchRef<'attributemetadata'> & {
        /** Наименование пользовательского поля */
        name?: string

        /** Тип значения пользовательского поля */
        type?: T

        file: {
          filename: string
          content: string
        } | null
      }

    : EntityPatchRef<'attributemetadata'> & {
        /** Наименование пользовательского поля */
        name?: string

        /** Тип значения пользовательского поля */
        type?: T

        value: AttributeValueByTypeMap[T]['value'] | null
      }
  )
