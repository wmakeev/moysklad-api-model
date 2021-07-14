import type {
  Account,
  AgentNote,
  Attribute,
  CashIn,
  CashOut,
  ContactPerson,
  Counterparty,
  CustomerOrder,
  CustomerOrderPosition,
  Demand,
  Employee,
  Entity,
  Group,
  InvoiceIn,
  InvoiceOut,
  Organization,
  PaymentIn,
  PaymentOut,
  RetailDemand,
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
  commissionreportinposition: Entity<'commissionreportinposition'>
  commissionreportout: Entity<'commissionreportout'>
  commissionreportoutposition: Entity<'commissionreportoutposition'>
  companysettings: Entity<'companysettings'>
  consignment: Entity<'consignment'>
  contactperson: ContactPerson
  contract: Entity<'contract'>
  counterparty: Counterparty
  country: Entity<'country'>
  currency: Entity<'currency'>
  customentity: Entity<'customentity'>
  customentitymetadata: Entity<'customentitymetadata'>
  customerorder: CustomerOrder
  customerorderposition: CustomerOrderPosition
  customtemplate: Entity<'customtemplate'>
  demand: Demand
  demandposition: Entity<'demandposition'>
  discount: Entity<'discount'>
  embeddedtemplate: Entity<'embeddedtemplate'>
  employee: Employee
  enter: Entity<'enter'>
  enterposition: Entity<'enterposition'>
  expenseitem: Entity<'expenseitem'>
  facturein: Entity<'facturein'>
  factureout: Entity<'factureout'>
  files: Entity<'files'>
  group: Group
  internalorder: Entity<'internalorder'>
  internalorderposition: Entity<'internalorderposition'>
  inventory: Entity<'inventory'>
  inventoryposition: Entity<'inventoryposition'>
  invoicein: InvoiceIn
  invoiceout: InvoiceOut
  invoiceposition: Entity<'invoiceposition'>
  loss: Entity<'loss'>
  lossposition: Entity<'lossposition'>
  move: Entity<'move'>
  moveposition: Entity<'moveposition'>
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
  processingorderposition: Entity<'processingorderposition'>
  processingplan: Entity<'processingplan'>
  processingplanmaterial: Entity<'processingplanmaterial'>
  processingplanresult: Entity<'processingplanresult'>
  processingpositionmaterial: Entity<'processingpositionmaterial'>
  processingpositionresult: Entity<'processingpositionresult'>
  product: Entity<'product'>
  productfolder: Entity<'productfolder'>
  project: Entity<'project'>
  purchaseorder: Entity<'purchaseorder'>
  purchaseorderposition: Entity<'purchaseorderposition'>
  purchasereturn: Entity<'purchasereturn'>
  purchasereturnposition: Entity<'purchasereturnposition'>
  region: Entity<'region'>
  retaildemand: RetailDemand
  retaildrawercashin: Entity<'retaildrawercashin'>
  retaildrawercashout: Entity<'retaildrawercashout'>
  retailsalesreturn: Entity<'retailsalesreturn'>
  retailshift: Entity<'retailshift'>
  retailstore: Entity<'retailstore'>
  salesreturn: Entity<'salesreturn'>
  salesreturnposition: Entity<'salesreturnposition'>
  service: Entity<'service'>
  specialpricediscount: Entity<'specialpricediscount'>
  state: State
  store: Entity<'store'>
  supply: Entity<'supply'>
  supplyposition: Entity<'supplyposition'>
  task: Entity<'task'>
  uom: Entity<'uom'>
  variant: Entity<'variant'>
}
