import { Attribute, CustomerOrder, MetaType, Patch } from '../../../src'

//#region Патч объекта
const t1 = {} as Patch<CustomerOrder>

// @ts-expect-error
t1.id // should omit readonly fields

// @ts-expect-error
t1.name.toString() // should make fields optional

t1.name?.toString()

t1.positions = [
  {
    meta: { type: MetaType.CustomerOrderPosition, href: '' },
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
      type: MetaType.AttributeMetadata,
      href: ''
    },
    value: 123
  }
]

t1.attributes = [
  {
    meta: {
      type: MetaType.AttributeMetadata,
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
      type: MetaType.AttributeMetadata,
      href: ''
    },
    // @ts-expect-error
    name: '',
    value: ''
  }
]
//#endregion

//#region Патч коллекции
const t4: Patch<CustomerOrder[]> = [
  {
    meta: {
      type: MetaType.CustomerOrder,
      href: ''
    },
    name: 'foo',
    attributes: [
      {
        meta: {
          type: MetaType.AttributeMetadata,
          href: ''
        }
      }
    ],
    positions: [
      {
        meta: { type: MetaType.CustomerOrderPosition, href: '' },
        price: 45,
        discount: 10
      }
    ]
  }
]
//#endregion

//#region Патч вложенной коллекции МойСклад
const attribute1: Patch<Attribute> = { value: 42 }

const attribute2: Patch<Attribute[]> = [
  {
    meta: {
      href: '',
      type: MetaType.AttributeMetadata
    },
    value: 42
  }
]
//#endregion
