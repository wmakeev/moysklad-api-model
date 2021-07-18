import type { Patch, InvoiceOut } from '../../src'
import { testTypeEqual } from '../tools'

const customerorder: Patch<'customerorder'> = {}

testTypeEqual<number | undefined>(customerorder.positions?.[0].reserve)

const invoicein: Patch<'invoiceout'> = {}

invoicein.positions?.[0].price
