import type { EntityByMetaType, EntityRef, MetaType } from './model'

export function isType<T extends MetaType>(
  metaType: T,
  entity: unknown
): entity is EntityByMetaType[T] {
  return (entity as any)?.meta?.type === metaType
}

export type PartialNullable<T> = { [P in keyof T]?: T[P] | undefined | null }
