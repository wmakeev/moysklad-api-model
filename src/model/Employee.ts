import type { Agent } from './Agent'
import type { MetaType } from './MetaType'

export interface Employee extends Agent<'employee'> {
  /** Логин Сотрудника */
  readonly uid: string

  /** Краткое ФИО */
  shortFio: string

  /** Имя Отчество Фамилия */
  fullName: string

  /** Имя */
  firstName?: string

  /** Отчество */
  middleName?: string

  /** Фамилия */
  lastName?: string
}
