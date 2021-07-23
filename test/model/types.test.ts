import type {
  Collection,
  CustomerOrder,
  Document,
  DocumentMetaType,
  DocumentWithPositionsMetaType,
  Expand,
  IsExtends
} from '../../src'

const t1: IsExtends<DocumentWithPositionsMetaType, DocumentMetaType> = true

const t2 = {} as Document<DocumentWithPositionsMetaType>

let t3_1 = {} as Expand<Collection<'customerorder'>, 'state'>
const t3_2 = {} as Expand<Collection<'customerorder'>, 'state'>

// FIXME Судя по всему, коллекцию нужно переделывать на Expand<Collection<CustomerOrder>, 'state'>

// @ts-expect-error
t3_1 = [...t3_1.rows, ...t3_2.rows]
