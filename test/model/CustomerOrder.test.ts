import type { CustomerOrder, CustomerOrderExpand } from '../../src'
import { AttributeType, MediaType, MetaType, TaxSystem } from '../../src'

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
  currency: {
    meta: {
      type: 'currency',
      href: ''
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
      type: AttributeType.Boolean,
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
      type: AttributeType.File,
      value: {},
      download: {
        href: '',
        mediaType: MediaType.ApplicationJson
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
  taxSystem: TaxSystem.GENERAL_TAX_SYSTEM,
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
