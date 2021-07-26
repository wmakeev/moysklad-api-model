import type {
  Collection,
  CustomerOrder,
  Document,
  DocumentMetaType,
  DocumentWithPositionsMetaType,
  Expand,
  IsExtends,
  Product
} from '../../src'

const t10: IsExtends<DocumentWithPositionsMetaType, DocumentMetaType> = true

const t20 = {} as Document<DocumentWithPositionsMetaType>

const t30 = {} as Product
const t30_1: 'product' = t30.meta.type
t30_1
