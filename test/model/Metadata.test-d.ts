import { expectType } from 'tsd'
import type { CollectionRef, Metadata, State } from '../../src'

// @ts-expect-error account не имеет метаданных
const t0 = {} as Metadata<'account'>

// Document

const t1 = {} as Metadata<'demand'>

expectType<`https://${string}/api/remap/1.2/entity/demand/metadata`>(
  t1.meta.href
)

expectType<CollectionRef<'attributemetadata'>>(t1.attributes)

expectType<State<'demand'>>(t1.states[0])

expectType<boolean>(t1.createShared)

// Dictionary

const t3 = {} as Metadata<'product'>

expectType<CollectionRef<'attributemetadata'>>(t3.attributes)

// @ts-expect-error
t3.states

expectType<boolean>(t3.createShared)

// Counterparty

const t4 = {} as Metadata<'counterparty'>

expectType<CollectionRef<'attributemetadata'>>(t4.attributes)

expectType<State<'counterparty'>>(t4.states[0])

expectType<boolean>(t3.createShared)

// Other

const t5 = {} as Metadata<'variant'>

// @ts-expect-error
t5.attributes

// @ts-expect-error
t5.states

// @ts-expect-error
t5.createShared

expectType<`https://${string}/api/remap/1.2/entity/variant/metadata`>(
  t5.meta.href
)
