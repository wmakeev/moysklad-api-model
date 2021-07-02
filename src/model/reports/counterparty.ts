import type { MetaType } from '..'
import type { CollectionRef } from '../CollectionRef'
import type { EntityRef } from '../EntityRef'

export interface CounterpartyReportItem
  extends EntityRef<MetaType.Counterparty> {
  counterparty: EntityRef<MetaType.Counterparty>
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
 * `/report/counterparty`
 */
export interface CounterpartyReport
  extends CollectionRef<MetaType.Counterparty> {
  context: {
    employee: EntityRef<MetaType.Employee>
  }

  rows: CounterpartyReportItem[]
}
