import type {
  DocumentMetaType,
  DictionaryMetaType,
  AttributeType,
  Entity,
  CollectionRef,
  State
} from '.'

/**
 * Типы сущностей у которых есть метаданные
 */
export type MetadataMetaType = DocumentMetaType | DictionaryMetaType

export type MetadataMeta<T extends MetadataMetaType = MetadataMetaType> = {
  meta: {
    /** `https://online.moysklad.ru/api/remap/1.2/entity/product/metadata` */
    href: `https://${string}/api/remap/1.2/entity/${T}/metadata`
    mediaType: 'application/json'
  }
}

export interface MetadataAttribute extends Entity<'attributemetadata'> {
  /** Наименование пользовательского поля */
  readonly name: string

  /** Тип значения пользовательского поля */
  readonly type: AttributeType

  readonly required: boolean

  readonly show: true
}

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
