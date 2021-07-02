export type HasVat =
  | {
      vatEnabled: false
    }
  | {
      vatEnabled: true
      vatIncluded: boolean
      vatSum: number
    }
