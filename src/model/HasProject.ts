import type { EntityRef } from './EntityRef'
import type { MetaType } from './MetaType'

export interface HasProject {
  project?: EntityRef<'project'>
}
