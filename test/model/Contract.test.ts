import type { Contract, Patch } from '../../src'

const t10 = {} as Contract

// @ts-expect-error
t10.contractType.rewardType

if (t10.contractType === 'Commission') {
  t10.rewardType = 'PercentOfSales'

  // @ts-expect-error
  t10.rewardPercent

  if (t10.rewardType === 'PercentOfSales') {
    t10.rewardPercent = 50
  }
}

const t20 = {} as Patch<'contract'>

// @ts-expect-error
t20.contractType.rewardType

if (t20.contractType === 'Commission') {
  t20.rewardType = 'PercentOfSales'

  // @ts-expect-error
  t20.rewardPercent

  if (t20.rewardType === 'PercentOfSales') {
    t20.rewardPercent = 50
  }
}

const t30 = {} as Contract & { contractType: 'Commission' }
t30.rewardType
