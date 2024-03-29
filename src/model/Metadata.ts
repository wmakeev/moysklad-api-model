import type {
  AttributeType,
  CollectionRef,
  DictionaryMetaType,
  DocumentMetaType,
  Entity,
  Meta,
  State
} from '.'

/**
 * Типы сущностей у которых есть метаданные
 */
export type MetadataMetaType = DocumentMetaType | DictionaryMetaType

export type MetadataMeta<T extends MetadataMetaType = MetadataMetaType> = {
  meta: {
    /** `https://api.moysklad.ru/api/remap/1.2/entity/product/metadata` */
    href: `https://${string}/api/remap/1.2/entity/${T}/metadata`
    mediaType: 'application/json'
  }
}

export type AttributeMetadata<T extends AttributeType = AttributeType> =
  Entity<'attributemetadata'> & {
    /** Наименование пользовательского поля */
    readonly name: string

    readonly required: boolean

    // TODO Только для документов (нужно разделять ради этого?)
    readonly show: boolean
  } & (T extends 'customentity'
      ? {
          /** Тип значения пользовательского поля */
          readonly type: T
          readonly customEntityMeta: Meta<'customentitymetadata'>
        }
      : {
          /** Тип значения пользовательского поля */
          readonly type: T
        })

export type DocumentMetadata<T extends DocumentMetaType = DocumentMetaType> =
  MetadataMeta<T> & {
    attributes: CollectionRef<'attributemetadata'>
    states: State<T>[]
    createShared: boolean
  }

// TODO
export type DictionaryMetadata<
  T extends DictionaryMetaType = DictionaryMetaType
> = MetadataMeta<T> & {
  attributes: CollectionRef<'attributemetadata'>
  createShared: boolean
} & (T extends 'counterparty' ? { states: State<T>[] } : {})

// prettier-ignore

export type Metadata<T extends MetadataMetaType> =
  // Документы
  T extends DocumentMetaType
    ? DocumentMetadata<T>

  // Справочники
  : T extends DictionaryMetaType
    ? T extends 'project' | 'store' | 'product' | 'counterparty'
      ? DictionaryMetadata<T>

    // Пустые метаданные
    : MetadataMeta<T>

  : never
