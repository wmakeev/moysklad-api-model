import type { CollectionRef, EntityRef } from '..'

export interface CounterpartyReportItem extends EntityRef<'counterparty'> {
  counterparty: EntityRef<'counterparty'>
  firstDemandDate: string | null
  lastDemandDate: string | null
  demandsCount: number
  demandsSum: number
  averageReceipt: number
  returnsCount: number
  returnsSum: number
  discountsSum: number
  balance: number
  profit: number
  lastEventDate: string | null
  lastEventText: string | null
  updated: string
}

/**
 * `report/counterparty`
 */
export interface CounterpartyReport extends CollectionRef<'counterparty'> {
  context: {
    employee: EntityRef<'employee'>
  }

  rows: CounterpartyReportItem[]
}
