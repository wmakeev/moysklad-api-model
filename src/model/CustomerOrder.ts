import type {
  EntityRef,
  HasVat,
  Order,
  OrderExpand,
  OrderPatch,
  TaxSystem
} from '.'
import type { OptionalNullablePartial } from '../tools'

export type CustomerOrderFields = HasVat & {
  taxSystem?: TaxSystem

  readonly reservedSum: number

  purchaseOrders?: EntityRef<'purchaseorder'>[]

  // TODO Проверить связи (нет в документации?)

  readonly shippedSum: number
  demands?: EntityRef<'demand'>[]

  readonly invoicedSum: number
  invoicesOut?: EntityRef<'invoiceout'>[]

  readonly payedSum: number
  payments?: EntityRef<'paymentout' | 'paymentin'>[]
}

export type CustomerOrder = Order<'customerorder'> & CustomerOrderFields

export type CustomerOrderExpand = Pick<
  CustomerOrder,
  'purchaseOrders' | 'demands' | 'invoicesOut' | 'payments'
> &
  OrderExpand<'customerorder'>

export type CustomerOrderPatch = OrderPatch<'customerorder'> &
  OptionalNullablePartial<Pick<CustomerOrderFields, 'taxSystem'>> &
  Partial<HasVat>
