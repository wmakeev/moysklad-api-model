import type { EntityRef } from '.'

export type AbstractFile<T extends 'image' | 'files'> = EntityRef<T> & {
  title: string
  filename: string
  size: number
}
