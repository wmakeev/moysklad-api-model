import type { CustomerOrder, CustomerOrderExpand } from '../../src'
import { AttributeType, MediaType, MetaType, TaxSystem } from '../../src'

const customerOrderFull1: CustomerOrder = {
  meta: {
    type: MetaType.CustomerOrder,
    href: ''
  },
  id: '',
  accountId: '',
  group: {
    meta: {
      type: MetaType.Group,
      href: ''
    }
  },
  owner: {
    meta: {
      type: MetaType.Employee,
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
      type: MetaType.CustomerOrderPosition,
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
      type: MetaType.State,
      href: ''
    }
  },
  store: {
    meta: {
      type: MetaType.Store,
      href: ''
    }
  },
  agent: {
    meta: {
      type: MetaType.Counterparty,
      href: ''
    }
  },
  agentAccount: {
    meta: {
      type: MetaType.Account,
      href: ''
    }
  },
  organization: {
    meta: {
      type: MetaType.Organization,
      href: ''
    }
  },
  organizationAccount: {
    meta: {
      type: MetaType.Account,
      href: ''
    }
  },
  applicable: true,
  currency: {
    meta: {
      type: MetaType.Currency,
      href: ''
    }
  },
  attributes: [
    {
      meta: {
        href: '',
        type: MetaType.AttributeMetadata
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
        type: MetaType.AttributeMetadata
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
      type: MetaType.Contract,
      href: ''
    }
  },
  project: {
    meta: {
      type: MetaType.Project,
      href: ''
    }
  },
  deliveryPlannedMoment: '',
  demands: [],
  files: {
    meta: {
      href: '',
      type: MetaType.Files,
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
      type: MetaType.Counterparty,
      href: ''
    }
  }
}
