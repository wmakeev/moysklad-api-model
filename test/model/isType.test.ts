import type { CustomerOrder, Demand, RetailDemand } from '../../src'
import { isType } from '../../src/tools'
import { getTypedVar } from '../tools'

const doc = getTypedVar<CustomerOrder | Demand | RetailDemand>()

if (isType('retaildemand', doc)) {
  const type: 'retaildemand' = doc.meta.type

  doc.cashSum
} else {
  const type: 'customerorder' | 'demand' = doc.meta.type
}
