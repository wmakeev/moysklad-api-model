import type { Entity } from './Entity'
import type { EntityRef } from './EntityRef'
import type { MediaType } from './MediaType'
import type { MetaType } from './MetaType'

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
  [AttributeType.Organization]: EntityRef<MetaType.Organization>
  [AttributeType.Counterparty]: EntityRef<MetaType.Counterparty>
  [AttributeType.Employee]: EntityRef<MetaType.Employee>
  [AttributeType.Contract]: EntityRef<MetaType.Contract>
  [AttributeType.Product]: EntityRef<MetaType.Product>
  [AttributeType.Project]: EntityRef<MetaType.Project>
  [AttributeType.Store]: EntityRef<MetaType.Store>

  // Custom entity
  [AttributeType.CustomEntity]: EntityRef<MetaType.CustomEntity> & {
    readonly name: string
  }
}

export interface AttributeBase<T extends AttributeType = AttributeType>
  extends Entity<MetaType.AttributeMetadata> {
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
