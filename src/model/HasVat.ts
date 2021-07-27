// TODO Временно упрощено до решения проблем с производительностью
/*
export type HasVat =
  | {
      vatEnabled: false
    }
  | {
      vatEnabled: true
      vatIncluded: boolean
      vatSum: number
    }
*/

export type HasVat = {
  vatEnabled: boolean

  /** Доступно только если указано `vatEnabled = true` */
  vatIncluded?: boolean

  /** Доступно только если указано `vatEnabled = true` */
  vatSum?: number
}
