import type { EntityByMetaType, DocumentWithPositionsMetaType, Id } from '..'
import type { Collection } from '../Collection'
import type { CompanyMetaType } from '../Company'
import type { Document, DocumentMetaType } from '../Document'
import type { Meta } from '../Meta'
import type { Expand, Patch, PatchCollection, Template } from '../utils'
import type { DomineEntityMetaType } from './types'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type HttpMethodPath = {
  GET:
    | `audit`
    | `audit/${Id}`
    | `audit/${Id}/events`
    | `context/employee`
    | `download/${Id}`
    | `entity/assortment`
    | `entity/customentity/${Id}`
    | `entity/${CompanyMetaType}/${Id}/accounts`
    | `entity/${DomineEntityMetaType}` // +
    | `entity/${DomineEntityMetaType}/metadata`
    | `entity/${DomineEntityMetaType}/metadata/attributes`
    | `entity/${DomineEntityMetaType}/${Id}`
    | `entity/${DocumentWithPositionsMetaType}/${Id}/positions`
    | `entity/${DocumentWithPositionsMetaType}/${Id}/positions/${Id}`

  POST:
    | `entity/${DomineEntityMetaType}`
    | `entity/${DocumentWithPositionsMetaType}/${Id}/positions`

  // TODO Какие точно типы поддерживают new?
  PUT: `entity/${DomineEntityMetaType}/${Id}` | `entity/${DocumentMetaType}/new`

  DELETE: `entity/${DomineEntityMetaType}/${Id}`
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

    // entity/{type}/{..}
    : Endpoint extends `entity/${infer EntityType}/${Id}`
      ? EntityType extends DomineEntityMetaType
        // GET entity/{type}/{id}
        ? Method extends 'GET'
          ? EndpointInterfaceInfo<
              never,
              EntityByMetaType[EntityType],
              ExpandStr
            >

        // PUT entity/{type}/{..}
        : Method extends 'PUT'
          ? Endpoint extends `entity/${EntityType}/${infer Rest}`

            // PUT entity/{type}/new
            ? Rest extends 'new'
              ? EntityType extends DocumentMetaType
                ? EntityByMetaType[EntityType] extends Document<EntityType>
                  ? EndpointInterfaceInfo<
                      // TODO Для разных типов могут быть разные поля
                      any,
                      // TODO Не прописаны сущности для всех документов
                      unknown, // Template<EntityByMetaType[EntityType]>,
                      ExpandStr
                    >
                  : never
                : never

            // PUT entity/{type}/{id}
            : EndpointInterfaceInfo<
                Patch<EntityType>,
                EntityByMetaType[EntityType],
                ExpandStr
              >
          : never

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

        // FIXME Нужно переделать с зависимостью от Payload
        // POST entity/{type}
        : Method extends 'POST'
          ? EndpointInterfaceInfo<
              Array<Patch<EntityType> & { meta?: Meta<EntityType> }>,
              EntityByMetaType[EntityType][],
              ExpandStr
            >

        // Unknown method
        : EndpointInterfaceInfo<never, unknown, undefined>

      // Unknown {type}
      : EndpointInterfaceInfo<unknown, unknown, undefined>

    // Unknown endpoint
    : EndpointInterfaceInfo<unknown, unknown, undefined>
