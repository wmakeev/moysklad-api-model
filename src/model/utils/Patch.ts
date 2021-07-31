import type {
  AttributePatch,
  CashInPatch,
  CashOutPatch,
  ContractPatch,
  CustomEntityPatch,
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
  contract: ContractPatch
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
  customentity: CustomEntityPatch
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
