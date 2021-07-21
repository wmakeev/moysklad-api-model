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

export type AttributeJsTypeMap = {
  // Base type
  [AttributeType.String]: string
  [AttributeType.Long]: number
  [AttributeType.Time]: string
  [AttributeType.File]: object // TODO AttributeType.File
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

export type Attribute<
  T extends AttributeType = AttributeType
> = T extends AttributeType.File
  ? AttributeBase<T> & {
      readonly download: {
        readonly href: string
        readonly mediaType: MediaType
      }
    }
  : AttributeBase<T>

export type AttributePatch<T extends AttributeType = AttributeType> =
  | (EntityPatchRef<'attributemetadata'> & {
      file: {
        filename: string
        content: string
      }
    })
  | (EntityPatchRef<'attributemetadata'> & Partial<Pick<Attribute<T>, 'value'>>)
