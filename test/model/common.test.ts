import type {
  AttributeType,
  EntityRef,
  Patch,
  PrefilledDocument
} from '../../src'
import { testTypeEqual } from '../tools'

const customerorder: Patch<'customerorder'> = {}

testTypeEqual<number | undefined | null>(customerorder.positions?.[0].reserve)

const invoiceOut: Patch<'invoiceout'> = {}

invoiceOut.positions?.[0].price
invoiceOut.customerOrder
invoiceOut.store
invoiceOut.paymentPlannedMoment

//#region
const t10_1 = {} as EntityRef<'attributemetadata'> & {
  value: EntityRef<AttributeType.CustomEntity>
}

const t10_2: Patch<'customerorder'> = {
  attributes: [
    t10_1,
    {
      meta: {
        type: 'attributemetadata',
        href: ''
      },
      value: 123
    }
  ]
}
t10_2
//#endregion
