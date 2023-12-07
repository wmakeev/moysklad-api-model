import type { Attribute } from '.'

// https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/8964403c-83a8-4f60-8532-a8a051ce51a8

export type Characteristic = Omit<Attribute<'string'>, 'type'>
