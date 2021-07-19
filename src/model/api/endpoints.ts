import type { EntityByMetaType, DocumentWithPositionsMetaType } from '..'
import type { Collection } from '../Collection'
import type { DocumentMetaType } from '../Document'
import type { Expand, Patch } from '../utils'
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

export type EndpointInterfaceInfo<
  Payload,
  Response,
  ExpandStr extends string | undefined
> = {
  payload: Payload
  response: ExpandStr extends string ? Expand<Response, ExpandStr> : Response
}

// prettier-ignore
export type EndpointInterface<
  Method extends HttpMethod,
  Endpoint extends HttpMethodPath[Method],
  ExpandStr extends string | undefined = undefined
> =
  // string
  string extends Endpoint
    ? EndpointInterfaceInfo<unknown, unknown, undefined>

    // entity/{type}/{id}
    : Endpoint extends `entity/${infer EntityType}/${string}`
      ? EntityType extends DomineEntityMetaType
        // GET entity/{type}/{id}
        ? Method extends 'GET'
          ? EndpointInterfaceInfo<
              never,
              EntityByMetaType[EntityType],
              ExpandStr
            >

        // PUT entity/{type}/{id}
        : Method extends 'PUT'
          ? EndpointInterfaceInfo<
              Patch<EntityType>,
              EntityByMetaType[EntityType],
              ExpandStr
            >

        // Unknown method
        : EndpointInterfaceInfo<never, unknown, undefined>

      // Unknown {type}
      : EndpointInterfaceInfo<unknown, unknown, undefined>

    // entity/{type}
    : Endpoint extends `entity/${infer EntityType}`
      ? EntityType extends DomineEntityMetaType
        // GET entity/{type}
        ? Method extends 'GET'
          ? EndpointInterfaceInfo<never, Collection<EntityType>, ExpandStr>
          : EndpointInterfaceInfo<never, unknown, undefined>
        : EndpointInterfaceInfo<unknown, unknown, undefined>

    : EndpointInterfaceInfo<unknown, unknown, undefined>
