import type {
  AttributePatch,
  CashInPatch,
  CashOutPatch,
  CustomerOrderPatch,
  CustomerOrderPositionPatch,
  DemandPatch,
  DemandPosition,
  EntityPatchRef,
  InvoiceInPatch,
  InvoiceOutPatch,
  InvoicePositionPatch,
  MetaType,
  ProductFolderPatch,
  ProductPatch,
  RetailDemand
} from '..'

export type PatchByMetaType = {
  attributemetadata: AttributePatch
  cashin: CashInPatch
  cashout: CashOutPatch
  customerorder: CustomerOrderPatch
  customerorderposition: CustomerOrderPositionPatch
  demand: DemandPatch
  demandposition: DemandPosition
  invoicein: InvoiceInPatch
  invoiceout: InvoiceOutPatch
  invoiceposition: InvoicePositionPatch
  product: ProductPatch
  productfolder: ProductFolderPatch
  retaildemand: RetailDemand
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
