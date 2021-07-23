import type {
  AttributePatch,
  CashInPatch,
  CashOutPatch,
  CustomerOrderPatch,
  CustomerOrderPositionPatch,
  Demand,
  DemandPosition,
  EntityPatchRef,
  InvoiceInPatch,
  InvoiceOutPatch,
  InvoicePositionPatch,
  MetaType,
  RetailDemand
} from '..'

export type PatchByMetaType = {
  customerorder: CustomerOrderPatch
  customerorderposition: CustomerOrderPositionPatch
  attributemetadata: AttributePatch
  invoicein: InvoiceInPatch
  invoiceout: InvoiceOutPatch
  invoiceposition: InvoicePositionPatch
  cashin: CashInPatch
  cashout: CashOutPatch
  demand: Demand
  demandposition: DemandPosition
  retaildemand: RetailDemand
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
