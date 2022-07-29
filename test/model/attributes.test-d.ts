import { expectType, expectNotType } from 'tsd'
import { Attribute, AttributePatch, AttributeType } from '../../src'

const t10_1 = {} as Attribute

if (t10_1.type === AttributeType.Boolean) {
  expectType<boolean>(t10_1.value)
}

const t11_1 = {} as AttributePatch

expectType<'attributemetadata'>(t11_1.meta.type)

// @ts-expect-error value maybe undefined if file specified
t11_1.value

if ('value' in t11_1) {
  // @ts-expect-error Поле `file` не определено если указано `value`
  t11_1.file

  // value не должен быть undefined, если он указан
  expectType<never>({} as any as Extract<typeof t11_1['value'], undefined>)

  expectType<null>({} as any as Extract<typeof t11_1['value'], null>)
}

if ('file' in t11_1) {
  // @ts-expect-error Поле `value` не определено если указано `file`
  t11_1.value

  // value не должен быть undefined, если он указан
  expectType<never>({} as any as Extract<typeof t11_1['file'], undefined>)

  expectType<null>({} as any as Extract<typeof t11_1['file'], null>)
}

const t12_1: AttributePatch = {
  meta: {
    type: 'attributemetadata',
    href: ''
  },
  value: {
    meta: {
      type: AttributeType.Store, // TODO Отказаться от Enum (нельзя указать просто "store") #djbqpgnsda
      href: ''
    }
  }
}
