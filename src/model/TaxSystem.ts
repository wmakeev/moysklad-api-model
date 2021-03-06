/** Код системы налогообложения. */
export enum TaxSystem {
  /** Совпадает с группой */
  TAX_SYSTEM_SAME_AS_GROUP = 'TAX_SYSTEM_SAME_AS_GROUP',

  /** ОСН */
  GENERAL_TAX_SYSTEM = 'GENERAL_TAX_SYSTEM',

  /** УСН. Доход */
  SIMPLIFIED_TAX_SYSTEM_INCOME = 'SIMPLIFIED_TAX_SYSTEM_INCOME',

  /** УСН. Доход-Расход */
  SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME = 'SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME',

  /** ЕСХН */
  UNIFIED_AGRICULTURAL_TAX = 'UNIFIED_AGRICULTURAL_TAX',

  /** ЕНВД */
  PRESUMPTIVE_TAX_SYSTEM = 'PRESUMPTIVE_TAX_SYSTEM',

  /** Патент */
  PATENT_BASED = 'PATENT_BASED'
}
