import type { AbstractFile, EntityRef } from '.'

export type ImageFields = {
  updated: string
  miniature: EntityRef<'image'>
  tiny: EntityRef<'image'>
}

export type Image = AbstractFile<'image'> & ImageFields
