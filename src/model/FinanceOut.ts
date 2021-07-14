import type { EntityRef } from './EntityRef'
import type { Finance, FinancePatch } from './Finance'

export type FinanceOutMetaType = 'paymentout' | 'cashout'

export type FinanceOutFields = {
  /**
   * Статья расхода (обязательное поле)
   * */
  expenseItem: EntityRef<'expenseitem'>
}

export type FinanceOut<T extends FinanceOutMetaType> = Finance<T> &
  FinanceOutFields

export type FinanceOutPatch = FinancePatch & Partial<FinanceOutFields>
