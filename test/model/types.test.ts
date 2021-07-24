import type {
  Collection,
  CustomerOrder,
  Document,
  DocumentMetaType,
  DocumentWithPositionsMetaType,
  Expand,
  IsExtends
} from '../../src'

const t10: IsExtends<DocumentWithPositionsMetaType, DocumentMetaType> = true

const t20 = {} as Document<DocumentWithPositionsMetaType>
