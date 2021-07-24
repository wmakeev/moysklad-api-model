// ВНИМАНИЕ!
// Это очень тяжелый тест. Он "убивает" производительность чекера TS.
// После каждого изменения чекер задумывается на несколько секунд.

// FIXME Можно что-то сделать с этим? И вооще как понять в чем причина тормозов?

import type { Collection, CustomerOrder, Expand } from '../../src'

let t10_1 = {} as Expand<Collection<'customerorder'>, 'state'>
const t10_2 = {} as Expand<Collection<'customerorder'>, 'state'>

t10_1.rows = [...t10_1.rows, ...t10_2.rows]

function mapOrder1(row: Expand<CustomerOrder, 'state'>) {
  return {
    meta: {
      type: row.meta.type,
      href: row.meta.href
    },
    id: row.id,
    name: row.name
  }
}

// Это исправление было сделано в Expand.ts, чтобы заработал код ниже ..

/*
  // i.e. `positions`
  : T extends Collection<infer M>
    // ? T & { rows: ExpandPath<T['rows'], K> }
    ? CollectionRef<M> & { rows: ExpandPath<EntityByMetaType[M], K>[] }
*/

// .. до этого map обрезал исходный тип до CustomerOrder
const t10_3 = t10_1.rows.map(row => mapOrder1(row))
t10_3

// Но такой вариант тоже не работает

// @ts-expect-error
const t10_4: Expand<CustomerOrder, 'state'>[] = t10_1.rows.map(row =>
  mapOrder1(row)
)
t10_4
