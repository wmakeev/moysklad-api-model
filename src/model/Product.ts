import type { AbstractGood, AbstractGoodPatch } from '.'

export type ProductFields = {}

export type Product = AbstractGood<'product'> & ProductFields

export type ProductPatch = AbstractGoodPatch
