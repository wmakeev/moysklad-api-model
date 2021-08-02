import type { Entity } from './Entity'
import type { EntityPatchRef, EntityRef } from './EntityRef'
import type { MediaType } from './MediaType'

export enum AttributeType {
  // Base type
  String = 'string',
  Long = 'long',
  Time = 'time',
  File = 'file',
  Double = 'double',
  Boolean = 'boolean',
  Text = 'text',
  Link = 'link',

  // Embedded entity
  Organization = 'organization',
  Counterparty = 'counterparty',
  Employee = 'employee',
  Contract = 'contract',
  Product = 'product',
  Project = 'project',
  Store = 'store',

  // Custom entity
  CustomEntity = 'customentity'
}

/** Типы атрибутов, значение которых является сущностью (ссылкой на сущность) */
export type EntityRefAttributeType =
  | AttributeType.Organization
  | AttributeType.Counterparty
  | AttributeType.Employee
  | AttributeType.Contract
  | AttributeType.Product
  | AttributeType.Project
  | AttributeType.Store
  | AttributeType.CustomEntity

export type AttributeJsTypeMap = {
  // Base type
  [AttributeType.String]: string
  [AttributeType.Long]: number
  [AttributeType.Time]: string
  [AttributeType.File]: string
  [AttributeType.Double]: number
  [AttributeType.Boolean]: boolean
  [AttributeType.Text]: string
  [AttributeType.Link]: string

  // Embedded entity
  [AttributeType.Organization]: EntityRef<'organization'>
  [AttributeType.Counterparty]: EntityRef<'counterparty'>
  [AttributeType.Employee]: EntityRef<'employee'>
  [AttributeType.Contract]: EntityRef<'contract'>
  [AttributeType.Product]: EntityRef<'product'>
  [AttributeType.Project]: EntityRef<'project'>
  [AttributeType.Store]: EntityRef<'store'>

  // Custom entity
  [AttributeType.CustomEntity]: EntityRef<'customentity'> & {
    readonly name: string
  }
}

export interface AttributeBase<T extends AttributeType = AttributeType>
  extends Entity<'attributemetadata'> {
  /** Наименование пользовательского поля */
  readonly name: string

  /** Тип значения пользовательского поля */
  readonly type: T

  value: AttributeJsTypeMap[T]
}

export type Attribute<T extends AttributeType = AttributeType> =
  T extends AttributeType.File
    ? AttributeBase<T> & {
        readonly download: {
          readonly href: string
          readonly mediaType: MediaType
        }
      }
    : AttributeBase<T>

// TODO Попробовать оптимизировать см. #dhg06qfl

// prettier-ignore

export type AttributePatch<T extends AttributeType = AttributeType> =
  T extends AttributeType.File
    ? EntityPatchRef<'attributemetadata'> & {
      file?: {
        filename: string
        content: string
      }
    }

  : T extends AttributeType.CustomEntity
    ? EntityPatchRef<'attributemetadata'> & {
      value: EntityRef<'customentity'>
    }

  : EntityPatchRef<'attributemetadata'> & Partial<Pick<Attribute<T>, 'value'>>
