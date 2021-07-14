import type {
  Document,
  DocumentMetaType,
  DocumentWithPositionsMetaType,
  IsExtends
} from '../../src'

const t1: IsExtends<DocumentWithPositionsMetaType, DocumentMetaType> = true

const t2 = {} as Document<DocumentWithPositionsMetaType>
