import type { Company } from './Company'
import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface Organization extends Company<MetaType.Organization> {
  /** Включен ли ЕГАИС для данного юрлица */
  isEgaisEnable: boolean

  /** Плательщик НДС */
  payerVat: boolean

  /** Руководитель */
  director: string

  /** Главный бухгалтер */
  chiefAccountant: string

  /** Идентификатор в ФСРАР */
  fsrarId?: string

  /** IP-адрес УТМ */
  utmUrl?: string

  trackingContractNumber?: string

  trackingContractDate?: Date

  /** Бонусная программа (meta) */
  bonusProgram?: EntityRef<MetaType.BonusProgram>
}
