import type { Patch, PrefilledDocument } from '../../src'
import { testTypeEqual } from '../tools'

const customerorder: Patch<'customerorder'> = {}

testTypeEqual<number | undefined>(customerorder.positions?.[0].reserve)

const invoiceOut: Patch<'invoiceout'> = {}

invoiceOut.positions?.[0].price
invoiceOut.customerOrder
invoiceOut.store
invoiceOut.paymentPlannedMoment
