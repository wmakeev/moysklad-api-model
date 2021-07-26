import type { Barcode, EntityRef } from '.'

export type Pack = {
  id: string

  uom: EntityRef<'uom'>

  quantity: number

  /**
   * Массив штрихкодов упаковок товаров.
   * Данный массив может содержать не более одного штрихкода.
   * Если штрихкод в массиве отсутствует, то данное поле не выводится
   */
  barcodes?: Barcode[]
}
