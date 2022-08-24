import type { Agent } from './Agent'

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
