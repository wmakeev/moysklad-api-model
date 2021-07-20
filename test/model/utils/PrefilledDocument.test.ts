import type { PrefilledDocument } from '../../../src'

const t1 = {} as PrefilledDocument<'customerorder'>

// @ts-expect-error
t1.id

t1.agent.meta

const invoiceOutPrefilled = {} as PrefilledDocument<'invoiceout'>

invoiceOutPrefilled.customerOrder
invoiceOutPrefilled.positions.rows[0].price

const cashinPrefilled = {} as PrefilledDocument<'cashin'>

const incomingDate1: string | undefined = cashinPrefilled.incomingDate
incomingDate1
