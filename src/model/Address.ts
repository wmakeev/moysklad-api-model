import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface Address {
  postalCode?: string

  country?: EntityRef<MetaType.Country>

  region?: EntityRef<MetaType.Region>

  city?: string

  street?: string

  house?: string

  apartment?: string

  addInfo?: string

  comment?: string
}
