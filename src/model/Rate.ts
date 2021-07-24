import type { EntityRef } from './EntityRef'

export type Rate = {
  /** Валюта документа */
  currency: EntityRef<'currency'>

  /** Курс валюты в документе */
  value?: number
}
