import type { EntityRef } from './EntityRef'

export type Price = {
  value: number
  currency: EntityRef<'currency'>
}
