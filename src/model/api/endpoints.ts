import type { EntityByMetaType, DocumentWithPositionsMetaType, Id } from '..'
import type { Collection } from '../Collection'
import type { CompanyMetaType } from '../Company'
import type { Document, DocumentMetaType } from '../Document'
import type { Meta } from '../Meta'
import type { Expand, Patch, PatchCollection, Template } from '../utils'
import type { DomineEntityMetaType } from './types'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

//#region Endpoints

export type AuditCollectionEndpoint = `audit`

export type AuditEndpoint = `audit/${Id}`

export type AuditEventCollectionEndpoint = `audit/${Id}/events`

export type EmployeeContextEndpoint = `context/employee`

export type DownloadEndpoint = `download/${Id}`

export type AssortmentCollectionEndpoint = `entity/assortment`

export type CustomEntityCollectionEndpoint = `entity/customentity/${Id}`

export type CustomEntityEndpoint = `entity/customentity/${Id}/${Id}`

export type CompanyAccountCollectionEndpoint<
  T extends CompanyMetaType = CompanyMetaType
> = `entity/${T}/${Id}/accounts`

export type DomineEntityCollectionEndpoint<
  T extends DomineEntityMetaType = DomineEntityMetaType
> = `entity/${T}`

export type EntityMetadataEndpoint<
  T extends DomineEntityMetaType = DomineEntityMetaType
> = `entity/${T}/metadata`

export type EntityAttributeMetadataEndpoint<
  T extends DomineEntityMetaType = DomineEntityMetaType
> = `entity/${T}/metadata/attributes`

export type DomineEntityEndpoint<
  T extends DomineEntityMetaType = DomineEntityMetaType
> = `entity/${T}/${Id}`

export type DocumentTemplateEndpoint<
  T extends DocumentMetaType = DocumentMetaType
> = `entity/${T}/new`

export type DocumentPositionCollectionEndpoint<
  T extends DocumentWithPositionsMetaType = DocumentWithPositionsMetaType
> = `entity/${T}/${Id}/positions`

export type DocumentPositionEndpoint<
  T extends DocumentWithPositionsMetaType = DocumentWithPositionsMetaType
> = `entity/${T}/${Id}/positions/${Id}`

//#endregion

export type HttpMethodPath = {
  GET:
    | AuditCollectionEndpoint
    | AuditEndpoint
    | AuditEventCollectionEndpoint
    | EmployeeContextEndpoint
    | DownloadEndpoint
    | AssortmentCollectionEndpoint
    | CustomEntityCollectionEndpoint
    | CompanyAccountCollectionEndpoint
    | DomineEntityCollectionEndpoint
    | EntityMetadataEndpoint
    | EntityAttributeMetadataEndpoint
    | DomineEntityEndpoint
    | DocumentPositionCollectionEndpoint
    | DocumentPositionEndpoint

  POST: DomineEntityCollectionEndpoint | DocumentPositionCollectionEndpoint

  // TODO Какие точно типы поддерживают new?
  PUT: DomineEntityEndpoint | DocumentTemplateEndpoint

  DELETE: DomineEntityEndpoint
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
    : Endpoint extends DomineEntityEndpoint<infer EntityType>
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
    : Endpoint extends DomineEntityCollectionEndpoint<infer EntityType>
      // TODO Эту ветку можно убрать? Стоит ограничение на тип в DomineEntityCollectionEndpoint.
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
