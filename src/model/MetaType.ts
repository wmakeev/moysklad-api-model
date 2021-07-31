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
  commissionreportin: Entity<'commissionreportin'>
  commissionreportinposition: Position<'commissionreportinposition'>
  commissionreportout: Entity<'commissionreportout'>
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
  enter: Entity<'enter'>
  enterposition: Position<'enterposition'>
  expenseitem: Entity<'expenseitem'>
  facturein: Entity<'facturein'>
  factureout: Entity<'factureout'>
  files: File
  group: Group
  image: Image
  internalorder: Entity<'internalorder'>
  internalorderposition: Position<'internalorderposition'>
  inventory: Entity<'inventory'>
  inventoryposition: Position<'inventoryposition'>
  invoicein: InvoiceIn
  invoiceout: InvoiceOut
  invoiceposition: InvoicePosition
  loss: Entity<'loss'>
  lossposition: Position<'lossposition'>
  move: Entity<'move'>
  moveposition: Position<'moveposition'>
  note: AgentNote
  organization: Organization
  paymentin: PaymentIn
  paymentout: PaymentOut
  personaldiscount: Entity<'personaldiscount'>
  pricelist: Entity<'pricelist'>
  pricelistrow: Entity<'pricelistrow'>
  pricetype: Entity<'pricetype'>
  processing: Entity<'processing'>
  processingorder: Entity<'processingorder'>
  processingorderposition: Position<'processingorderposition'>
  processingplan: Entity<'processingplan'>
  processingplanmaterial: Entity<'processingplanmaterial'>
  processingplanresult: Entity<'processingplanresult'>
  processingpositionmaterial: Entity<'processingpositionmaterial'>
  processingpositionresult: Entity<'processingpositionresult'>
  product: Product
  productfolder: ProductFolder
  project: Entity<'project'>
  purchaseorder: Entity<'purchaseorder'>
  purchaseorderposition: Position<'purchaseorderposition'>
  purchasereturn: Entity<'purchasereturn'>
  purchasereturnposition: Position<'purchasereturnposition'>
  region: Entity<'region'>
  retaildemand: RetailDemand
  retaildrawercashin: Entity<'retaildrawercashin'>
  retaildrawercashout: Entity<'retaildrawercashout'>
  retailsalesreturn: Entity<'retailsalesreturn'>
  retailshift: Entity<'retailshift'>
  retailstore: Entity<'retailstore'>
  salesreturn: Entity<'salesreturn'>
  salesreturnposition: Position<'salesreturnposition'>
  service: Entity<'service'>
  specialpricediscount: Entity<'specialpricediscount'>
  state: State
  store: Entity<'store'>
  supply: Entity<'supply'>
  supplyposition: Position<'supplyposition'>
  task: Entity<'task'>
  uom: Entity<'uom'>
  variant: Entity<'variant'>
}

/**
 * MetaType документов для которых реализованы типы.
 * */
export type ImplementedDocumentsMetaType = SelectKeysByType<
  EntityByMetaType,
  Document<DocumentMetaType>
>
