export type HasVat =
  | {
      vatEnabled: false
    }
  | {
      vatEnabled: true
      vatIncluded: boolean
      vatSum: number
    }

export type HasVatPatch =
  | {
      vatEnabled?: false
    }
  | {
      vatEnabled: true
      vatIncluded?: boolean
      vatSum?: number
    }
