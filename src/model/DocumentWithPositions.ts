import type { CollectionRef } from './CollectionRef'
import type { Document, DocumentExpand } from './Document'
import type { PositionTypeByDocument } from './Position'

export interface DocumentWithPositions<T extends keyof PositionTypeByDocument>
  extends Document<T> {
  positions: CollectionRef<PositionTypeByDocument[T]>
}

export type DocumentWithPositionsExpand<
  T extends keyof PositionTypeByDocument
> = Pick<DocumentWithPositions<T>, 'positions'> & DocumentExpand<T>
