import type { EntityRef } from './EntityRef'
import type { HasVat } from './HasVat'
import type { MetaType } from './MetaType'
import type { Order, OrderExpand } from './Order'
import type { TaxSystem } from './TaxSystem'

export type CustomerOrder = Order<MetaType.CustomerOrder> &
  HasVat & {
    taxSystem?: TaxSystem

    reservedSum: number

    purchaseOrders?: EntityRef<MetaType.PurchaseOrder>[]

    // TODO Проверить связи (нет в документации?)

    shippedSum: number
    demands?: EntityRef<MetaType.Demand>[]

    invoicedSum: number
    invoicesOut?: EntityRef<MetaType.InvoiceOut>[]

    payedSum: number
    payments?: EntityRef<MetaType.PaymentOut | MetaType.PaymentIn>[]
  }

export type CustomerOrderExpand = Pick<
  CustomerOrder,
  'purchaseOrders' | 'demands' | 'invoicesOut' | 'payments'
> &
  OrderExpand<MetaType.CustomerOrder>
