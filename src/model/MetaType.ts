import type {
  Account,
  AgentNote,
  Attribute,
  CashIn,
  CashOut,
  ContactPerson,
  Contract,
  Counterparty,
  CustomEntity,
  CustomerOrder,
  CustomerOrderPosition,
  Demand,
  DemandPosition,
  Document,
  DocumentMetaType,
  Employee,
  Entity,
  File,
  Group,
  Image,
  InvoiceIn,
  InvoiceOut,
  InvoicePosition,
  Organization,
  PaymentIn,
  PaymentOut,
  Position,
  Product,
  ProductFolder,
  RetailDemand,
  SelectKeysByType,
  State,
  SalesReturn,
  RetailSalesReturn,
  SalesReturnPosition,
  Inventory,
  InventoryPosition
} from '.'

export type MetaType =
  | 'account'
  | 'accumulationdiscount'
  | 'attributemetadata'
  | 'bonusprogram'
  | 'bundle'
  | 'bundlecomponent'
  | 'cashier'
  | 'cashin'
  | 'cashout'
  | 'commissionreportin'
  | 'commissionreportinposition'
  | 'commissionreportout'
  | 'commissionreportoutposition'
  | 'companysettings'
  | 'consignment'
  | 'contactperson'
  | 'contract'
  | 'counterparty'
  | 'country'
  | 'currency'
  | 'customentity'
  | 'customentitymetadata'
  | 'customerorder'
  | 'customerorderposition'
  | 'customtemplate'
  | 'demand'
  | 'demandposition'
  | 'discount'
  | 'embeddedtemplate'
  | 'employee'
  | 'enter'
  | 'enterposition'
  | 'expenseitem'
  | 'facturein'
  | 'factureout'
  | 'files'
  | 'group'
  | 'image'
  | 'internalorder'
  | 'internalorderposition'
  | 'inventory'
  | 'inventoryposition'
  | 'invoicein'
  | 'invoiceout'
  | 'invoiceposition'
  | 'loss'
  | 'lossposition'
  | 'move'
  | 'moveposition'
  | 'note'
  | 'organization'
  | 'paymentin'
  | 'paymentout'
  | 'personaldiscount'
  | 'pricelist'
  | 'pricelistrow'
  | 'pricetype'
  | 'processing'
  | 'processingorder'
  | 'processingorderposition'
  | 'processingplan'
  | 'processingplanmaterial'
  | 'processingplanresult'
  | 'processingpositionmaterial'
  | 'processingpositionresult'
  | 'product'
  | 'productfolder'
  | 'project'
  | 'purchaseorder'
  | 'purchaseorderposition'
  | 'purchasereturn'
  | 'purchasereturnposition'
  | 'region'
  | 'retaildemand'
  | 'retaildrawercashin'
  | 'retaildrawercashout'
  | 'retailsalesreturn'
  | 'retailshift'
  | 'retailstore'
  | 'salesreturn'
  | 'salesreturnposition'
  | 'service'
  | 'specialpricediscount'
  | 'state'
  | 'store'
  | 'supply'
  | 'supplyposition'
  | 'task'
  | 'uom'
  | 'variant'

export type EntityByMetaType = {
  account: Account
  accumulationdiscount: Entity<'accumulationdiscount'>
  attributemetadata: Attribute
  bonusprogram: Entity<'bonusprogram'>
  bundle: Entity<'bundle'>
  bundlecomponent: Entity<'bundlecomponent'>
  cashier: Entity<'cashier'>
  cashin: CashIn
  cashout: CashOut
  commissionreportin: Document<'commissionreportin'>
  commissionreportinposition: Position<'commissionreportinposition'>
  commissionreportout: Document<'commissionreportout'>
  commissionreportoutposition: Position<'commissionreportoutposition'>
  companysettings: Entity<'companysettings'>
  consignment: Entity<'consignment'>
  contactperson: ContactPerson
  contract: Contract
  counterparty: Counterparty
  country: Entity<'country'>
  currency: Entity<'currency'>
  customentity: CustomEntity
  customentitymetadata: Entity<'customentitymetadata'>
  customerorder: CustomerOrder
  customerorderposition: CustomerOrderPosition
  customtemplate: Entity<'customtemplate'>
  demand: Demand
  demandposition: DemandPosition
  discount: Entity<'discount'>
  embeddedtemplate: Entity<'embeddedtemplate'>
  employee: Employee
  enter: Document<'enter'>
  enterposition: Position<'enterposition'>
  expenseitem: Entity<'expenseitem'>
  facturein: Document<'facturein'>
  factureout: Document<'factureout'>
  files: File
  group: Group
  image: Image
  internalorder: Document<'internalorder'>
  internalorderposition: Position<'internalorderposition'>
  inventory: Inventory
  inventoryposition: InventoryPosition
  invoicein: InvoiceIn
  invoiceout: InvoiceOut
  invoiceposition: InvoicePosition
  loss: Document<'loss'>
  lossposition: Position<'lossposition'>
  move: Document<'move'>
  moveposition: Position<'moveposition'>
  note: AgentNote
  organization: Organization
  paymentin: PaymentIn
  paymentout: PaymentOut
  personaldiscount: Entity<'personaldiscount'>
  pricelist: Document<'pricelist'>
  pricelistrow: Entity<'pricelistrow'>
  pricetype: Entity<'pricetype'>
  processing: Entity<'processing'>
  processingorder: Document<'processingorder'>
  processingorderposition: Position<'processingorderposition'>
  processingplan: Entity<'processingplan'>
  processingplanmaterial: Entity<'processingplanmaterial'>
  processingplanresult: Entity<'processingplanresult'>
  processingpositionmaterial: Entity<'processingpositionmaterial'>
  processingpositionresult: Entity<'processingpositionresult'>
  product: Product
  productfolder: ProductFolder
  project: Entity<'project'>
  purchaseorder: Document<'purchaseorder'>
  purchaseorderposition: Position<'purchaseorderposition'>
  purchasereturn: Document<'purchasereturn'>
  purchasereturnposition: Position<'purchasereturnposition'>
  region: Entity<'region'>
  retaildemand: RetailDemand
  retaildrawercashin: Document<'retaildrawercashin'>
  retaildrawercashout: Document<'retaildrawercashout'>
  retailsalesreturn: RetailSalesReturn
  retailshift: Entity<'retailshift'>
  retailstore: Entity<'retailstore'>
  salesreturn: SalesReturn
  salesreturnposition: SalesReturnPosition
  service: Entity<'service'>
  specialpricediscount: Entity<'specialpricediscount'>
  state: State
  store: Entity<'store'>
  supply: Document<'supply'>
  supplyposition: Position<'supplyposition'>
  task: Entity<'task'>
  uom: Entity<'uom'>
  variant: Entity<'variant'>
}
