// ВНИМАНИЕ!
// Это очень тяжелый тест. Он "убивает" производительность чекера TS.
// После каждого изменения чекер задумывается на несколько секунд.

// FIXME Можно что-то сделать с этим? И вооще как понять в чем причина тормозов?

import type {
  Agent,
  Assortment,
  Counterparty,
  CustomerOrder,
  CustomerOrderPosition,
  Expand,
  MetaType,
  Organization,
  Product,
  State
} from '../../src'
import { flatMap, map } from '../../src/array'
import fp from 'lodash/fp'
import _ from 'lodash'

const order = {} as CustomerOrder

order.agent.meta.type
order.agent.meta.href

const expandedOrder = {} as Expand<
  CustomerOrder,
  'agent,state,positions.assortment.supplier'
>

//#region Такой вариант расширения не работает с .map (тип обрезается)
const expandedOrderEx = {} as CustomerOrder & {
  agent: Counterparty | Organization
} & { state: State<MetaType> | undefined } & {
  positions: {
    rows: CustomerOrderPosition[]
  }
} & {
  positions: {
    rows: Array<{
      assortment: Product
    }>
  }
} & {
  positions: {
    rows: Array<{
      assortment: { supplier: Counterparty | Organization }
    }>
  }
}
expandedOrderEx
//#endregion

expandedOrder.agent.name
expandedOrder.state?.stateType
expandedOrder.positions.rows[0].quantity
expandedOrder.positions.rows[0].assortment.name
expandedOrder.positions.rows[0].assortment.supplier?.companyType

//#region Нативный map - медленно!!!
const productNamesEx = expandedOrder.positions.rows.map(row => {
  return row.assortment
})
productNamesEx[0].buyPrice.value
//#endregion

//#region Обернутый map - быстро
const productNames3 = map(expandedOrder.positions.rows, row => {
  return row.assortment.country
})
productNames3[0]?.meta.type
//#endregion

//#region Обернутый flatMap - быстро
const productNames4 = flatMap(expandedOrder.positions.rows, row => {
  return [row.assortment]
})

productNames4[0].alcoholic?.excise
//#endregion

//#region lodash.fp.map - быстро
const productNames5 = fp.map((row: { assortment: { name: string } }) => {
  return row.assortment
})(expandedOrder.positions.rows)
//#endregion

//#region lodash.map
const productNames6 = _.map(expandedOrder.positions.rows, row => {
  return row.assortment.group
})
productNames6[0].meta
//#endregion

//#region lodash.map - медленно !!!
const productNames6ex = _(expandedOrder.positions.rows)
  .map(row => {
    return row.assortment.name
  })
  .flatMap(it => it.trim())
productNames6ex
//#endregion

//#region sample 3 (map через цикл - быстро)
const productNames = []

for (const row of expandedOrder.positions.rows) {
  productNames.push(row.assortment.name)
}

productNames
//#endregion
