import type {
  AttributePatch,
  CustomerOrderPatch,
  EntityPatchRef,
  MetaType,
  CustomerOrderPositionPatch
} from '..'

export type PatchByMetaType = {
  customerorder: CustomerOrderPatch
  customerorderposition: CustomerOrderPositionPatch
  attributemetadata: AttributePatch
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
