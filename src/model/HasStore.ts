import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface HasStore {
  /** Склад */
  store?: EntityRef<MetaType.Store>
}
