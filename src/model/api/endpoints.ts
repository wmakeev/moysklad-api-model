import type {
  EntityByMetaType,
  IsExtends,
  DocumentWithPositionsMetaType
} from '..'
import type { Collection } from '../Collection'
import type { CustomerOrder } from '../CustomerOrder'
import type { DocumentMetaType } from '../Document'
import type { EntityRef } from '../EntityRef'
import type { Patch } from '../utils'
import type { DomineEntityMetaType } from './types'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type HttpMethodPath = {
  GET:
    | `audit`
    | `audit/${string}`
    | `audit/${string}/events`
    | `context/employee`
    | `download/${string}`
    | `entity/assortment`
    | `entity/customentity/${string}`
    | `entity/${DomineEntityMetaType}` // +
    | `entity/${DomineEntityMetaType}/metadata`
    | `entity/${DomineEntityMetaType}/metadata/attributes`
    | `entity/${DomineEntityMetaType}/${string}`
    | `entity/${DocumentWithPositionsMetaType}/${string}/positions`
    | `entity/${DocumentWithPositionsMetaType}/${string}/positions/${string}`

  POST:
    | `entity/${DomineEntityMetaType}`
    | `entity/${DocumentWithPositionsMetaType}/${string}/positions`

  PUT:
    | `entity/${DomineEntityMetaType}/${string}`
    | `entity/${DocumentMetaType}/new` // TODO Какие точно типы поддерживают new

  DELETE: `entity/${DomineEntityMetaType}/${string}`
}

// prettier-ignore
export type EndpointInterface<
  Method extends HttpMethod,
  Ref extends HttpMethodPath[Method]
> =
  // string
  string extends Ref
    ? { payload: unknown; response: unknown }

    // entity/{type}/{id}
    : Ref extends `entity/${infer EntityType}/${string}`
      ? EntityType extends DomineEntityMetaType
        // GET entity/{type}/{id}
        ? Method extends 'GET'
          ? { payload: never; response: EntityByMetaType[EntityType] }

        // PUT entity/{type}/{id}
        : Method extends 'PUT'
          ? {
              payload: Patch<EntityType>
              response: EntityByMetaType[EntityType]
            }

        // Unknown method
        : { payload: never; response: unknown }

      // Unknown {type}
      : { payload: unknown; response: unknown }

    // entity/{type}
    : Ref extends `entity/${infer EntityType}`
      ? EntityType extends DomineEntityMetaType
        // GET entity/{type}
        ? Method extends 'GET'
          ? { payload: never; response: Collection<EntityType> }
          : { payload: never; response: unknown }
        : { payload: unknown; response: unknown }

    : { payload: unknown; response: unknown }

// Неизвестный пусть
// @ts-expect-error
const t1 = {} as EndpointInterface<'GET', 'foo/bar'>['response']

// @ts-expect-error
const t2: 'foo' = {} as EndpointInterface<
  'GET',
  'entity/customerorder'
>['response']

const t3: EndpointInterface<'POST', 'entity/customerorder'>['response'] =
  'unknown'

const t4: IsExtends<
  EndpointInterface<'GET', 'entity/customerorder'>['response'],
  Collection<'customerorder'>
> = true

const t5: IsExtends<
  EndpointInterface<'GET', `entity/customerorder/123-456`>['response'],
  CustomerOrder
> = true

function request<M extends HttpMethod, P extends HttpMethodPath[M]>(
  method: M,
  path: P,
  body?: EndpointInterface<M, P>['payload']
): EndpointInterface<M, P>['response'] {
  return { method, path, body } as any
}

const t6: Collection<'customerorder'> = request('GET', `entity/customerorder`)

const id = '123-456'

const t7: CustomerOrder = request('GET', `entity/customerorder/${id}`)

// @ts-expect-error
const t7e: EntityRef = request('GET', `entity/customerorder3/${id}`)

// @ts-expect-error
const t6e: Collection<'customerorder'> = request(
  'GET',
  `entity/customerorder/123`
)

const t8 = request('POST', 'entity/customerorder')

// Метод не поддерживает указанный путь
// @ts-expect-error
const t8e = request('POST', 'entity/customerorder/123-456')

const t9_1 = request('PUT', 'entity/customerorder/123-456', {
  name: 'new-name'
})

const t9_2: CustomerOrder = request('PUT', 'entity/customerorder/123-456', {
  name: 'new-name'
})

const e9_1 = request('PUT', 'entity/customerorder/123-456', {
  // @ts-expect-error
  id: '123-456'
})

const e9_2 = request('PUT', 'entity/customerorder/123-456', {
  // @ts-expect-error
  id: '123-456',
  name: 'Foo'
})

const t10_1: Patch<'customerorder'> = {
  name: 'Foo'
}

const t10_2 = request('PUT', 'entity/customerorder/123-456', t10_1)

const t11_1: Partial<CustomerOrder> = {
  meta: {
    type: 'customerorder',
    href: ''
  }
}

// @ts-expect-error
const t11_2 = request('PUT', 'entity/customerorder/123-456', t11_1)
