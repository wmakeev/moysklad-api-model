import type { AbstractFile, EntityRef } from '.'

export type FileFields = {
  created: string

  createdBy: EntityRef<'employee'>

  miniature?: EntityRef<'image'>

  tiny?: EntityRef<'image'>
}

export type File = AbstractFile<'files'> & FileFields
