import type {
  Attribute,
  CustomerOrder,
  CustomerOrderPatch,
  MetaType,
  Patch,
  PatchByMetaType,
  PatchCollection
} from '../../../src'

const customerOrderMetaType: 'customerorder' = 'customerorder'

const customerOrderPatch1: CustomerOrderPatch = {
  name: 'Foo'
}

const customerOrderPatch2: PatchByMetaType['customerorder'] = {
  name: 'Foo'
}

//#region Патч объекта
const t1 = {} as Patch<'customerorder'>

// @ts-expect-error
t1.id // should omit readonly fields

// @ts-expect-error
t1.name.toString() // should make fields optional

t1.name?.toString()

t1.positions = [
  {
    meta: {
      type: 'customerorderposition',
      href: ''
    },
    price: 12300,
    discount: 10
  }
]

t1.positions = [
  // @ts-expect-error
  {
    // У элемента коллекции должен быть обязательно указан meta
    // meta?
    price: 12300,
    discount: 10
  }
]

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    value: 123
  }
]

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    value: ''
  }
]

t1.attributes = [
  // @ts-expect-error
  {
    value: ''
  }
]

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    // @ts-expect-error
    name: '',
    value: ''
  }
]
//#endregion

//#region Патч коллекции
const t4: PatchCollection<'customerorder'> = [
  {
    meta: {
      type: 'customerorder',
      href: ''
    },
    name: 'foo',
    attributes: [
      {
        meta: {
          type: 'attributemetadata',
          href: ''
        }
      }
    ],
    positions: [
      {
        meta: { type: 'customerorderposition', href: '' },
        price: 45,
        discount: 10
      }
    ]
  }
]
//#endregion

//#region Патч вложенной коллекции МойСклад
const attribute1: Patch<'attributemetadata'> = {
  meta: {
    type: 'attributemetadata',
    href: ''
  },
  value: 42
}

const attribute2: PatchCollection<'attributemetadata'> = [
  {
    meta: {
      href: '',
      type: 'attributemetadata'
    },
    value: 42
  }
]
//#endregion
