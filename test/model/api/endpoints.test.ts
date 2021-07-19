import type {
  Collection,
  CustomerOrder,
  EndpointInterface,
  HttpMethod,
  HttpMethodPath,
  IsExtends,
  Patch
} from '../../../src'

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

function request<
  M extends HttpMethod,
  P extends HttpMethodPath[M],
  E extends string | undefined = undefined
>(
  method: M,
  path: P,
  body?: EndpointInterface<M, P>['payload'],
  expand?: E
): EndpointInterface<M, P, E>['response'] {
  return { method, path, body, expand } as any
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

// Expand

const t12_1 = request(
  'GET',
  'entity/customerorder',
  undefined,
  'agent,positions.assortment'
)

t12_1.rows[0].agent.name

t12_1.rows[0].positions.rows[0].assortment.id
