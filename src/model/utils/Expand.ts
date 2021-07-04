import type { EntityRef } from '../EntityRef'
import type { EntityByMetaType } from '../MetaType'

type ExpandEntityRef<T, K extends keyof T> = {
  [P in keyof T]: K extends P
    ? T[P] extends EntityRef<infer M> | undefined
      ? EntityRef<M> extends T[P]
        ? EntityByMetaType[M]
        : EntityByMetaType[M] | undefined
      : never
    : T[P]
}

export type Expand<T, K extends string> = string extends K
  ? never
  : K extends `${infer Field}.${infer Rest}`
  ? Field extends keyof T
    ? ExpandEntityRef<T, Field> &
        {
          [Key in Field]: Expand<ExpandEntityRef<T, Field>[Field], Rest>
        }
    : never
  : K extends keyof T
  ? ExpandEntityRef<T, K>
  : never
