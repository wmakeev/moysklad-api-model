import type {
  DocumentMetaType,
  DocumentWithPositionsMetaType,
  EntityByMetaType,
  Expand
} from '..'

// TODO Указать конкретные типы документов которые можно создавать этим методом

// TODO Описать параметры необходимые для создания шаблона документа

// TODO API гибок и позволяет отправлять при создании объекта не обязательные
// и лишние поля. В типах нельзя позволять такую вольность, хотя на практике
// подобное может быть удобно.

// Другими словами, при получении шаблона его необходимо будет деструктурировать
// в случае, когда шаблон ынужно обогащать доп. данными

/**
 * Шаблон нового документа `/entity/{type}/new`
 */
export type PrefilledDocument<T extends DocumentMetaType> = Omit<
  T extends DocumentWithPositionsMetaType
    ? Expand<EntityByMetaType[T], 'positions'>
    : EntityByMetaType[T],
  'meta' | 'id' | 'accountId' | 'updated'
>

// TODO Необходимо раскрывать позиции для документов с позициями
