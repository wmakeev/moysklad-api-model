import type { Entity } from './Entity'
import type { MetaType } from './MetaType'

export enum StateType {
  Regular = 'Regular',
  Successful = 'Successful',
  Unsuccessful = 'Unsuccessful'
}

// TODO Чтобы выводился `entityType` необходима более сложная схема для Expand

/**
 * Состояние документа или сущности
 */
export interface State<T extends MetaType = MetaType> extends Entity<'state'> {
  /** Наименование */
  name: string

  /** Цвет статуса */
  color: number

  /** Тип статуса */
  stateType: StateType

  /** Сущность которой пренадлежит статус */
  entityType: T
}
