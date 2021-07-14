import type { EntityRef } from './EntityRef'

export interface HasStore {
  /** Склад */
  store?: EntityRef<'store'>
}
