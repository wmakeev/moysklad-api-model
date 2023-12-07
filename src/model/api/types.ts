// нелья получит по Entity
export type _OtherEndpointMetaType =
  | 'account'
  | 'attributemetadata'
  | 'bundlecomponent'
  | 'cashier'
  | 'companysettings'
  | 'contactperson'
  | 'customentitymetadata'
  | 'customtemplate'
  | 'embeddedtemplate'
  | 'files'
  | 'pricelistrow'
  | 'pricetype'
  | 'processingplanmaterial'
  | 'processingplanresult'
  | 'processingpositionmaterial'
  | 'processingpositionresult'
  | 'purchasereturn'
  | 'state'
  | 'note'

export type _WithId = 'customentity'

/**
 * Типы доменных сущностей (сущности которые можно получить напрямую через
 * запрос к API)
 */
export type DomineEntityMetaType =
  | 'accumulationdiscount'
  | 'bonusprogram'
  | 'bundle'
  | 'cashin'
  | 'cashout'
  | 'commissionreportin'
  | 'commissionreportout'
  | 'consignment'
  | 'contract'
  | 'counterparty'
  | 'country'
  | 'currency'
  | 'customentity'
  | 'customerorder'
  | 'demand'
  | 'discount'
  | 'employee'
  | 'enter'
  | 'expenseitem'
  | 'facturein'
  | 'factureout'
  | 'group'
  | 'internalorder'
  | 'inventory'
  | 'invoicein'
  | 'invoiceout'
  | 'loss'
  | 'move'
  | 'organization'
  | 'paymentin'
  | 'paymentout'
  | 'personaldiscount'
  | 'pricelist'
  | 'processing'
  | 'processingorder'
  | 'processingplan'
  | 'product'
  | 'productfolder'
  | 'project'
  | 'purchaseorder'
  | 'region'
  | 'retaildemand'
  | 'retaildrawercashin'
  | 'retaildrawercashout'
  | 'retailsalesreturn'
  | 'retailshift'
  | 'retailstore'
  | 'salesreturn'
  | 'service'
  | 'specialpricediscount'
  | 'store'
  | 'supply'
  | 'task'
  | 'uom'
  | 'variant'

export type RemapApiHref<T extends string> =
  `https://api.moysklad.ru/api/remap/${string}/${T}`
