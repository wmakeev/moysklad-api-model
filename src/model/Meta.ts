import type { MetaType } from './MetaType'

export interface Meta<T extends MetaType = MetaType> {
  href: string

  type: T

  // mediaType: MediaType // TODO Добавлять примесь в объекте?

  // uuidHref!: string // TODO Зависит от типа
  // metadataHref!: string // TODO Зависит от типа
  // downloadHref!: string // TODO Зависит от типа
}

export type MetaPatch<T extends MetaType = MetaType> = Pick<
  Meta<T>,
  'type' | 'href'
>
