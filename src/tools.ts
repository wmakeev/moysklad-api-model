import type { EntityByMetaType, EntityRef, MetaType } from './model'

export function isType<T extends MetaType>(
  metaType: T,
  entity: unknown
): entity is EntityByMetaType[T] {
  return (entity as any)?.meta?.type === metaType
}

/**
 * Значения могут быть `null`, но не могут быть `undefined`
 */
export type NullablePartial<T> = { [P in keyof T]: T[P] | null }

/** Значения могут быть `null` и `undefined` */
export type OptionalNullablePartial<T> = {
  [P in keyof T]?: T[P] | undefined | null
}
