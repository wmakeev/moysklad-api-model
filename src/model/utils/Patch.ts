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
  InventoryPatch,
  InventoryPositionPatch,
  InvoiceInPatch,
  InvoiceOutPatch,
  InvoicePositionPatch,
  MetaType,
  ProductFolderPatch,
  ProductPatch,
  RetailDemand,
  SalesReturnPatch,
  SalesReturnPositionPatch
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
  inventory: InventoryPatch
  inventoryposition: InventoryPositionPatch
  product: ProductPatch
  productfolder: ProductFolderPatch
  retaildemand: RetailDemand
  customentity: CustomEntityPatch
  salesreturn: SalesReturnPatch
  salesreturnposition: SalesReturnPositionPatch
}

export type Patch<T extends MetaType> = T extends keyof PatchByMetaType
  ? PatchByMetaType[T]
  : {}

export type PatchCollection<T extends MetaType = MetaType> = (Patch<T> &
  EntityPatchRef<T>)[]
