// import type { MediaType } from './MediaType'
import type { MoyskladObject } from './MoyskladObject'
import type { Meta } from './Meta'
import type { MetaType } from './MetaType'

// TODO MediaType можно задать в зависимости от значения T

export interface EntityRef<T extends MetaType = MetaType>
  extends MoyskladObject {
  /** Метаданные сущности */
  readonly meta: Meta<T>
}
