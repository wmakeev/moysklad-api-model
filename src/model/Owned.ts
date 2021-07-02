import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface Owned {
  /** Общий доступ */
  shared: boolean

  /** Отдел сотрудника */
  group: EntityRef<MetaType.Group>

  /** Владелец (сотрудник) */
  owner: EntityRef<MetaType.Employee>
}
