import type { EntityRef } from './EntityRef'

export type Owned = {
  /** Общий доступ */
  shared: boolean

  /** Отдел сотрудника */
  group: EntityRef<'group'>

  /** Владелец (сотрудник) */
  owner: EntityRef<'employee'>
}

export type OwnedPatch = Partial<Owned>
