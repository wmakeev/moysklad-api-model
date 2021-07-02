import type { Account } from './Account'
import type { AgentNote } from './AgentNote'
import type { ContactPerson } from './ContactPerson'
import type { Counterparty } from './Counterparty'
import type { CustomerOrder } from './CustomerOrder'
import type { Employee } from './Employee'
import type { Entity } from './Entity'
import type { Group } from './Group'
import type { Organization } from './Organization'

export enum MetaType {
  Account = 'account',
  AccumulationDiscount = 'accumulationdiscount',
  AttributeMetadata = 'attributemetadata',
  BonusProgram = 'bonusprogram',
  Bundle = 'bundle',
  BundleComponent = 'bundlecomponent',
  Cashier = 'cashier',
  CashIn = 'cashin',
  CashOut = 'cashout',
  CommissionReportIn = 'commissionreportin',
  CommissionReportInPosition = 'commissionreportinposition',
  CommissionReportOut = 'commissionreportout',
  CommissionReportOutPosition = 'commissionreportoutposition',
  CompanySettings = 'companysettings',
  Consignment = 'consignment',
  ContactPerson = 'contactperson',
  Contract = 'contract',
  Counterparty = 'counterparty',
  Country = 'country',
  Currency = 'currency',
  CustomEntity = 'customentity',
  CustomEntityMetadata = 'customentitymetadata',
  CustomerOrder = 'customerorder',
  CustomerOrderPosition = 'customerorderposition',
  CustomTemplate = 'customtemplate',
  Demand = 'demand',
  DemandPosition = 'demandposition',
  Discount = 'discount',
  EmbeddedTemplate = 'embeddedtemplate',
  Employee = 'employee',
  Enter = 'enter',
  EnterPosition = 'enterposition',
  ExpenseItem = 'expenseitem',
  FactureIn = 'facturein',
  FactureOut = 'factureout',
  Files = 'files',
  Group = 'group',
  InternalOrder = 'internalorder',
  InternalOrderPosition = 'internalorderposition',
  Inventory = 'inventory',
  InventoryPosition = 'inventoryposition',
  InvoiceIn = 'invoicein',
  InvoiceOut = 'invoiceout',
  InvoicePosition = 'invoiceposition',
  Loss = 'loss',
  LossPosition = 'lossposition',
  Move = 'move',
  MovePosition = 'moveposition',
  Note = 'note',
  Organization = 'organization',
  PaymentIn = 'paymentin',
  PaymentOut = 'paymentout',
  PersonalDiscount = 'personaldiscount',
  PriceList = 'pricelist',
  PriceListRow = 'pricelistrow',
  PriceType = 'pricetype',
  Processing = 'processing',
  ProcessingOrder = 'processingorder',
  ProcessingOrderPosition = 'processingorderposition',
  ProcessingPlan = 'processingplan',
  ProcessingPlanMaterial = 'processingplanmaterial',
  ProcessingPlanResult = 'processingplanresult',
  ProcessingPositionMaterial = 'processingpositionmaterial',
  ProcessingPositionResult = 'processingpositionresult',
  Product = 'product',
  ProductFolder = 'productfolder',
  Project = 'project',
  PurchaseOrder = 'purchaseorder',
  PurchaseOrderPosition = 'purchaseorderposition',
  PurchaseReturn = 'purchasereturn',
  PurchaseReturnPosition = 'purchasereturnposition',
  Region = 'region',
  RetailDemand = 'retaildemand',
  RetailDrawerCashIn = 'retaildrawercashin',
  RetailDrawerCashOut = 'retaildrawercashout',
  RetailSalesReturn = 'retailsalesreturn',
  RetailShift = 'retailshift',
  RetailStore = 'retailstore',
  SalesReturn = 'salesreturn',
  SalesReturnPosition = 'salesreturnposition',
  Service = 'service',
  SpecialPriceDiscount = 'specialpricediscount',
  State = 'state',
  Store = 'store',
  Supply = 'supply',
  SupplyPosition = 'supplyposition',
  Task = 'task',
  Uom = 'uom',
  Variant = 'variant'
}

export type EntityByMetaType = {
  [MetaType.Account]: Account
  [MetaType.AccumulationDiscount]: Entity<MetaType.AccumulationDiscount>
  [MetaType.AttributeMetadata]: Entity<MetaType.AttributeMetadata>
  [MetaType.BonusProgram]: Entity<MetaType.BonusProgram>
  [MetaType.Bundle]: Entity<MetaType.Bundle>
  [MetaType.BundleComponent]: Entity<MetaType.BundleComponent>
  [MetaType.Cashier]: Entity<MetaType.Cashier>
  [MetaType.CashIn]: Entity<MetaType.CashIn>
  [MetaType.CashOut]: Entity<MetaType.CashOut>
  [MetaType.CommissionReportIn]: Entity<MetaType.CommissionReportIn>
  [MetaType.CommissionReportInPosition]: Entity<MetaType.CommissionReportInPosition>
  [MetaType.CommissionReportOut]: Entity<MetaType.CommissionReportOut>
  [MetaType.CommissionReportOutPosition]: Entity<MetaType.CommissionReportOutPosition>
  [MetaType.CompanySettings]: Entity<MetaType.CompanySettings>
  [MetaType.Consignment]: Entity<MetaType.Consignment>
  [MetaType.ContactPerson]: ContactPerson
  [MetaType.Contract]: Entity<MetaType.Contract>
  [MetaType.Counterparty]: Counterparty
  [MetaType.Country]: Entity<MetaType.Country>
  [MetaType.Currency]: Entity<MetaType.Currency>
  [MetaType.CustomEntity]: Entity<MetaType.CustomEntity>
  [MetaType.CustomEntityMetadata]: Entity<MetaType.CustomEntityMetadata>
  [MetaType.CustomerOrder]: CustomerOrder
  [MetaType.CustomerOrderPosition]: Entity<MetaType.CustomerOrderPosition>
  [MetaType.CustomTemplate]: Entity<MetaType.CustomTemplate>
  [MetaType.Demand]: Entity<MetaType.Demand>
  [MetaType.DemandPosition]: Entity<MetaType.DemandPosition>
  [MetaType.Discount]: Entity<MetaType.Discount>
  [MetaType.EmbeddedTemplate]: Entity<MetaType.EmbeddedTemplate>
  [MetaType.Employee]: Employee
  [MetaType.Enter]: Entity<MetaType.Enter>
  [MetaType.EnterPosition]: Entity<MetaType.EnterPosition>
  [MetaType.ExpenseItem]: Entity<MetaType.ExpenseItem>
  [MetaType.FactureIn]: Entity<MetaType.FactureIn>
  [MetaType.FactureOut]: Entity<MetaType.FactureOut>
  [MetaType.Files]: Entity<MetaType.Files>
  [MetaType.Group]: Group
  [MetaType.InternalOrder]: Entity<MetaType.InternalOrder>
  [MetaType.InternalOrderPosition]: Entity<MetaType.InternalOrderPosition>
  [MetaType.Inventory]: Entity<MetaType.Inventory>
  [MetaType.InventoryPosition]: Entity<MetaType.InventoryPosition>
  [MetaType.InvoiceIn]: Entity<MetaType.InvoiceIn>
  [MetaType.InvoiceOut]: Entity<MetaType.InvoiceOut>
  [MetaType.InvoicePosition]: Entity<MetaType.InvoicePosition>
  [MetaType.Loss]: Entity<MetaType.Loss>
  [MetaType.LossPosition]: Entity<MetaType.LossPosition>
  [MetaType.Move]: Entity<MetaType.Move>
  [MetaType.MovePosition]: Entity<MetaType.MovePosition>
  [MetaType.Note]: AgentNote
  [MetaType.Organization]: Organization
  [MetaType.PaymentIn]: Entity<MetaType.PaymentIn>
  [MetaType.PaymentOut]: Entity<MetaType.PaymentOut>
  [MetaType.PersonalDiscount]: Entity<MetaType.PersonalDiscount>
  [MetaType.PriceList]: Entity<MetaType.PriceList>
  [MetaType.PriceListRow]: Entity<MetaType.PriceListRow>
  [MetaType.PriceType]: Entity<MetaType.PriceType>
  [MetaType.Processing]: Entity<MetaType.Processing>
  [MetaType.ProcessingOrder]: Entity<MetaType.ProcessingOrder>
  [MetaType.ProcessingOrderPosition]: Entity<MetaType.ProcessingOrderPosition>
  [MetaType.ProcessingPlan]: Entity<MetaType.ProcessingPlan>
  [MetaType.ProcessingPlanMaterial]: Entity<MetaType.ProcessingPlanMaterial>
  [MetaType.ProcessingPlanResult]: Entity<MetaType.ProcessingPlanResult>
  [MetaType.ProcessingPositionMaterial]: Entity<MetaType.ProcessingPositionMaterial>
  [MetaType.ProcessingPositionResult]: Entity<MetaType.ProcessingPositionResult>
  [MetaType.Product]: Entity<MetaType.Product>
  [MetaType.ProductFolder]: Entity<MetaType.ProductFolder>
  [MetaType.Project]: Entity<MetaType.Project>
  [MetaType.PurchaseOrder]: Entity<MetaType.PurchaseOrder>
  [MetaType.PurchaseOrderPosition]: Entity<MetaType.PurchaseOrderPosition>
  [MetaType.PurchaseReturn]: Entity<MetaType.PurchaseReturn>
  [MetaType.PurchaseReturnPosition]: Entity<MetaType.PurchaseReturnPosition>
  [MetaType.Region]: Entity<MetaType.Region>
  [MetaType.RetailDemand]: Entity<MetaType.RetailDemand>
  [MetaType.RetailDrawerCashIn]: Entity<MetaType.RetailDrawerCashIn>
  [MetaType.RetailDrawerCashOut]: Entity<MetaType.RetailDrawerCashOut>
  [MetaType.RetailSalesReturn]: Entity<MetaType.RetailSalesReturn>
  [MetaType.RetailShift]: Entity<MetaType.RetailShift>
  [MetaType.RetailStore]: Entity<MetaType.RetailStore>
  [MetaType.SalesReturn]: Entity<MetaType.SalesReturn>
  [MetaType.SalesReturnPosition]: Entity<MetaType.SalesReturnPosition>
  [MetaType.Service]: Entity<MetaType.Service>
  [MetaType.SpecialPriceDiscount]: Entity<MetaType.SpecialPriceDiscount>
  [MetaType.State]: Entity<MetaType.State>
  [MetaType.Store]: Entity<MetaType.Store>
  [MetaType.Supply]: Entity<MetaType.Supply>
  [MetaType.SupplyPosition]: Entity<MetaType.SupplyPosition>
  [MetaType.Task]: Entity<MetaType.Task>
  [MetaType.Uom]: Entity<MetaType.Uom>
  [MetaType.Variant]: Entity<MetaType.Variant>
}
