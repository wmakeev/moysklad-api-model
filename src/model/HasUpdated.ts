export interface HasUpdated {
  /** Момент последнего обновления */
  updated: string

  /** Момент последнего удаления (помещения в корзину) */
  deleted?: string
}
