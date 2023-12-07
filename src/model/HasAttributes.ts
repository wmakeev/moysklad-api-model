import type { Attribute, AttributePatch } from './Attribute'

export type HasAttributes = {
  /** Спосок пользовательских полей */
  attributes?: Attribute[]
}

export type HasAttributesPatch = {
  attributes: AttributePatch[]
}
