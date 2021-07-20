import type { DocumentWithPositionsMetaType } from '../DocumentWithPositions'
import type {
  EntityByMetaType,
  ImplementedDocumentsMetaType
} from '../MetaType'
import type { Expand } from './Expand'

// TODO Указать конкретные типы документов которые можно создавать этим методом

// TODO API гибок и позволяет отправлять при создании объекта не обязательные
// и лишние поля. В типах нельзя позволять такую вольность, хотя на практике
// подобное может быть удобно.

// Другими словами, при получении шаблона его необходимо будет деструктурировать
// в случае, когда шаблон ынужно обогащать доп. данными

/**
 * Шаблон нового документа `/entity/{type}/new`
 */
export type PrefilledDocument<T extends ImplementedDocumentsMetaType> = Omit<
  T extends DocumentWithPositionsMetaType
    ? Expand<EntityByMetaType[T], 'positions'>
    : EntityByMetaType[T],
  'meta' | 'id' | 'accountId' | 'updated'
>

// TODO Необходимо раскрывать позиции для документов с позициями
