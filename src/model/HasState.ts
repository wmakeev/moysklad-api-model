import type { EntityRef } from './EntityRef'

export type HasState = {
  /** Статус документа */
  state?: EntityRef<'state'>
}
