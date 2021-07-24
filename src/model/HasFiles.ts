import type { CollectionRef } from './CollectionRef'

export type HasFiles = {
  /** Вложенные файлы (максимальное кол-во файлов - 100) */
  files?: CollectionRef<'files'>
}
