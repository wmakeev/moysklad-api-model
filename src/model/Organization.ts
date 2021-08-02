import type { Company, EntityRef } from '.'

export interface Organization extends Company<'organization'> {
  /** Включен ли ЕГАИС для данного юрлица */
  isEgaisEnable: boolean

  /** Плательщик НДС */
  payerVat: boolean

  /** Руководитель */
  director: string

  /** Главный бухгалтер */
  chiefAccountant: string

  /** Идентификатор в ФСРАР */
  readonly fsrarId?: string

  /** IP-адрес УТМ */
  readonly utmUrl?: string

  readonly trackingContractNumber?: string

  readonly trackingContractDate?: Date

  /** Бонусная программа (meta) */
  readonly bonusProgram?: EntityRef<'bonusprogram'>
}
