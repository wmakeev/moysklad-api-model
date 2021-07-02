import { CustomerOrder, Demand, MetaType, RetailDemand } from '../../src'
import { isType } from '../../src/tools'
import { getTypedVar } from '../tools'

const doc = getTypedVar<CustomerOrder | Demand | RetailDemand>()

if (isType(MetaType.RetailDemand, doc)) {
  const type: MetaType.RetailDemand = doc.meta.type

  doc.cashSum
} else {
  const type: MetaType.CustomerOrder | MetaType.Demand = doc.meta.type
}
