import type { CollectionRef } from './CollectionRef'
import type { Document, DocumentExpand, DocumentPatch } from './Document'
import type { EntityRef } from './EntityRef'
import type { DocumentPositionType, PositionPatch } from './Position'
import type { Patch } from './utils'

export type DocumentWithPositionsMetaType = keyof DocumentPositionType

export type DocumentWithPositionsFields<
  T extends DocumentWithPositionsMetaType
> = {
  store: EntityRef<'store'>
  positions: CollectionRef<DocumentPositionType[T]>
}

export type DocumentWithPositions<
  T extends DocumentWithPositionsMetaType
> = Document<T> & DocumentWithPositionsFields<T>

export type DocumentWithPositionsExpand<
  T extends DocumentWithPositionsMetaType
> = Pick<DocumentWithPositionsFields<T>, 'positions' | 'store'> &
  DocumentExpand<T>

export type DocumentWithPositionsPatch<
  T extends DocumentWithPositionsMetaType
> = DocumentPatch &
  Partial<
    {
      // TODO Добавить вариант с коллекцией?
      // TODO Для каждого типа документа будет свой PositionPatch (брать из type map)
      positions: Patch<DocumentPositionType[T]>[]
    } & Pick<DocumentWithPositionsFields<T>, 'store'>
  >
