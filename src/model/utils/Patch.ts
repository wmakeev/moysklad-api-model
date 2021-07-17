import type {
  AttributePatch,
  CustomerOrderPatch,
  EntityPatchRef,
  MetaType,
  CustomerOrderPositionPatch,
  InvoiceInPatch,
  InvoiceOutPatch
} from '..'
import type { CashInPatch } from '../CashIn'
import type { CashOutPatch } from '../CashOut'

export type PatchByMetaType = {
  customerorder: CustomerOrderPatch
  customerorderposition: CustomerOrderPositionPatch
  attributemetadata: AttributePatch
  invoicein: InvoiceInPatch
  invoiceout: InvoiceOutPatch
  cashin: CashInPatch
  cashout: CashOutPatch
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
