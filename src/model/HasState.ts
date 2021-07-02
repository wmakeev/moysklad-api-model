import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface HasState {
  /** Статус документа */
  state?: EntityRef<MetaType.State>
}
