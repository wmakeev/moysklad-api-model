// @ts-nocheck

import type { EntityByMetaType, MetaType } from './model/MetaType'
import type { PositionTypeByDocument } from './model/Position'

type EntityCollectionEndpoint<T extends MetaType> = `entity/${T}`
// type EntityCollectionEndpoint2 = `entity/${MetaType}`

type EntityEndpoint = `entity/${MetaType}/${string}`

type PositionsEndpoint = `entity/${keyof PositionTypeByDocument}/${string}/positions`
type CounterpartyContactPersonsEndpoint = `entity/${MetaType.Counterparty}/${string}/contactpersons`

export type EntityByEndpoint<T extends string> = string extends T
  ? 'unknown1'
  : T extends `entity/${infer M}`
  ? M extends keyof EntityByMetaType
    ? EntityByMetaType[M]
    : M
  : 'never3'

type Test1 = EntityByEndpoint<'entity/account'>
type Test2 = EntityByMetaType['bonusprogram']

type Keys = keyof EntityByMetaType // MetaType
type Keys2 = `${MetaType}`
type Keys3 = keyof typeof MetaType

type Test3 = 'account' extends keyof EntityByMetaType ? true : false
type Test4 = 'account' extends Keys2 ? true : false
type Test5 = 'account' extends keyof typeof MetaType ? true : false
