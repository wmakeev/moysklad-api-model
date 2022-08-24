import type {
  Account,
  AgentNote,
  Attribute,
  CashIn,
  CashOut,
  CompanySettings,
  ContactPerson,
  Contract,
  Counterparty,
  Currency,
  CustomEntity,
  CustomerOrder,
  CustomerOrderPosition,
  Demand,
  DemandPosition,
  Document,
  DocumentWithPositions,
  Employee,
  Entity,
  File,
  Group,
  Image,
  Inventory,
  InventoryPosition,
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
  RetailSalesReturn,
  SalesReturn,
  SalesReturnPosition,
  State
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
  commissionreportin: DocumentWithPositions<'commissionreportin'>
  commissionreportinposition: Position<'commissionreportinposition'>
  commissionreportout: DocumentWithPositions<'commissionreportout'>
  commissionreportoutposition: Position<'commissionreportoutposition'>
  companysettings: CompanySettings
  consignment: Entity<'consignment'>
  contactperson: ContactPerson
  contract: Contract
  counterparty: Counterparty
  country: Entity<'country'>
  currency: Currency
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
  enter: DocumentWithPositions<'enter'>
  enterposition: Position<'enterposition'>
  expenseitem: Entity<'expenseitem'>
  facturein: Document<'facturein'>
  factureout: Document<'factureout'>
  files: File
  group: Group
  image: Image
  internalorder: DocumentWithPositions<'internalorder'>
  internalorderposition: Position<'internalorderposition'>
  inventory: Inventory
  inventoryposition: InventoryPosition
  invoicein: InvoiceIn
  invoiceout: InvoiceOut
  invoiceposition: InvoicePosition
  loss: DocumentWithPositions<'loss'>
  lossposition: Position<'lossposition'>
  move: DocumentWithPositions<'move'>
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
  purchaseorder: DocumentWithPositions<'purchaseorder'>
  purchaseorderposition: Position<'purchaseorderposition'>
  purchasereturn: DocumentWithPositions<'purchasereturn'>
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
  supply: DocumentWithPositions<'supply'>
  supplyposition: Position<'supplyposition'>
  task: Entity<'task'>
  uom: Entity<'uom'>
  variant: Entity<'variant'>
}
