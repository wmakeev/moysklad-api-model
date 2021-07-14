import type { CollectionRef } from './CollectionRef'
import type { MetaType } from './MetaType'

export interface HasFiles {
  /** Вложенные файлы (максимальное кол-во файлов - 100) */
  files?: CollectionRef<'files'>
}
