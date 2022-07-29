import type {
  Attribute,
  AttributeType,
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
  {
    // meta не бязательная для поля позиций в рамках документа
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
  // @ts-expect-error Нельзя указывать атрибуты без значений
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    }
  }
]

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    file: { filename: '', content: '' }
  },
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    file: null
  },
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    value: 'foo'
  },
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    value: null
  }
]

t1.attributes = [
  {
    // @ts-expect-error
    value: ''
  }
]

t1.attributes = [
  {
    // @ts-expect-error
    file: {}
  }
]

// TODO Нужно оптимизировать проверку типа в attributes #dhg06qfl ..
// .. не понятная ошибка, когда указано лишнее поле

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    // foo: '', // #dhg06qfl
    value: ''
  }
]

t1.attributes = [
  {
    meta: {
      type: 'attributemetadata',
      href: ''
    },
    // foo: '', // #dhg06qfl
    value: { meta: { type: 'customentity', href: '' } }
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
        },
        value: true
      },
      {
        meta: {
          type: 'attributemetadata',
          href: ''
        },
        value: null
      },
      {
        meta: {
          type: 'attributemetadata',
          href: ''
        },
        file: {
          filename: 'foo.jpg',
          content: ''
        }
      },
      {
        meta: {
          type: 'attributemetadata',
          href: ''
        },
        file: null
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
