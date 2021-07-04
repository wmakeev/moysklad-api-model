import type { Document, DocumentMetaType } from '../Document'

// TODO Указать конкретные типы документов которые можно создавать этим методом

// TODO API гибок и позволяет отправлять при создании объекта не обязательные
// и лишние поля. В типах нельзя позволять такую вольность, хотя на практике
// подобное может быть удобно.

// Другими словами, при получении шаблона его необходимо будет деструктурировать
// в случае, когда шаблон ынужно обогащать доп. данными

/**
 * Шаблон нового документа `/entity/{type}/new`
 */
export type Template<T extends Document<DocumentMetaType>> = Omit<
  T,
  'meta' | 'id' | 'accountId' | 'updated'
>
