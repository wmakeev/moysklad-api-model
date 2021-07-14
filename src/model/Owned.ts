import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface Owned {
  /** Общий доступ */
  shared: boolean

  /** Отдел сотрудника */
  group: EntityRef<'group'>

  /** Владелец (сотрудник) */
  owner: EntityRef<'employee'>
}
