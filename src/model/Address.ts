import type { OptionalNullablePartial } from '../tools'
import type { EntityRef } from './EntityRef'

export interface Address {
  /**
   * Почтовый индекс
   *
   * `String(6)`
   */
  postalCode?: string

  /**
   * Страна
   */
  country?: EntityRef<'country'>

  /**
   * Регион
   */
  region?: EntityRef<'region'>

  /**
   * Город
   *
   * `String(255)	`
   */
  city?: string

  /**
   * Улица
   *
   * `String(255)	`
   */
  street?: string

  /**
   * Дом
   *
   * `String(30)`
   */
  house?: string

  /**
   * Квартира
   *
   * `String(30)`
   */
  apartment?: string

  /**
   * Другое
   *
   * `String(255)	`
   */
  addInfo?: string

  /**
   * Комментарий
   *
   * `String(255)`
   */
  comment?: string
}

export type AddressPatch = OptionalNullablePartial<Address>
