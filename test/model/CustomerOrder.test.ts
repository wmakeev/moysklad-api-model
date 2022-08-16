import type { CustomerOrder, CustomerOrderExpand, Patch } from '../../src'

const customerOrderFull1: CustomerOrder = {
  meta: {
    type: 'customerorder',
    href: ''
  },
  id: '',
  accountId: '',
  group: {
    meta: {
      type: 'group',
      href: ''
    }
  },
  owner: {
    meta: {
      type: 'employee',
      href: ''
    }
  },
  shared: true,
  updated: '',
  created: '',
  moment: '',
  name: '',
  externalCode: '',
  positions: {
    meta: {
      type: 'customerorderposition',
      href: '',
      limit: 0,
      offset: 0,
      size: 0
    }
  },
  deleted: '',
  description: '',
  syncId: '',
  vatEnabled: false,
  state: {
    meta: {
      type: 'state',
      href: ''
    }
  },
  store: {
    meta: {
      type: 'store',
      href: ''
    }
  },
  agent: {
    meta: {
      type: 'counterparty',
      href: ''
    }
  },
  agentAccount: {
    meta: {
      type: 'account',
      href: ''
    }
  },
  organization: {
    meta: {
      type: 'organization',
      href: ''
    }
  },
  organizationAccount: {
    meta: {
      type: 'account',
      href: ''
    }
  },
  applicable: true,
  rate: {
    currency: {
      meta: {
        type: 'currency',
        href: ''
      }
    }
  },
  attributes: [
    {
      meta: {
        href: '',
        type: 'attributemetadata'
      },
      accountId: '',
      id: '',
      name: '',
      type: 'boolean',
      value: true
    },
    {
      meta: {
        href: '',
        type: 'attributemetadata'
      },
      accountId: '',
      id: '',
      name: '',
      type: 'file',
      value: '',
      download: {
        href: '',
        mediaType: 'application/octet-stream'
      }
    }
  ],
  contract: {
    meta: {
      type: 'contract',
      href: ''
    }
  },
  project: {
    meta: {
      type: 'project',
      href: ''
    }
  },
  deliveryPlannedMoment: '',
  demands: [],
  files: {
    meta: {
      href: '',
      type: 'files',
      limit: 0,
      offset: 0,
      size: 0
    }
  },
  taxSystem: 'GENERAL_TAX_SYSTEM',
  purchaseOrders: [],
  invoicesOut: [],
  payments: [],
  sum: 0,
  shippedSum: 0,
  reservedSum: 0,
  payedSum: 0,
  invoicedSum: 0
}

const customerOrderExpand1: Partial<CustomerOrderExpand> = {
  agent: {
    meta: {
      type: 'counterparty',
      href: ''
    }
  }
}

//#region Зависимые поля НДС

const t10_1 = {} as CustomerOrder

t10_1.vatEnabled

// TODO vatEnabled: @ts-expect-error
t10_1.vatIncluded

// TODO vatEnabled: @ts-expect-error
t10_1.vatSum

/* TODO vatEnabled:
if (t10_1.vatEnabled === true) {
  const t1: boolean = t10_1.vatIncluded
  const t2: number = t10_1.vatSum
}
*/

const t10_2 = {} as Patch<'customerorder'>

// TODO vatEnabled: @ts-expect-error
t10_2.vatIncluded

t10_2.vatEnabled = true

// TODO vatEnabled: @ts-expect-error
t10_2.vatIncluded

if (t10_2.vatEnabled) {
  t10_2.vatIncluded = true
}

// Несовместимые значения полей

const t10_3: Patch<'customerorder'> = {
  // по хорошему, тут нельзя установить поле если нет vatEnabled ..
  vatIncluded: true
}
t10_3

const t10_4: Patch<'customerorder'> = {
  vatEnabled: false,
  // .. нужно явно указывать vatEnabled
  // TODO vatEnabled: @ts-expect-error
  vatIncluded: true
}
t10_4

//#endregion
