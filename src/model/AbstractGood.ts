import type {
  AttributePatch,
  Entity,
  Owned,
  OwnedPatch,
  ProductFolder,
  ProductFolderFields,
  TaxSystem
} from '.'
import type { OptionalNullablePartial } from '../tools'
import type { Attribute } from './Attribute'
import type { Barcode } from './Barcode'
import type { CollectionRef } from './CollectionRef'
import type { EntityRef } from './EntityRef'
import type { Pack } from './Pack'
import type { Price } from './Price'
import type { ProductFolderPatch } from './ProductFolder'
import type { SalePrice } from './SalePrice'

export type TrackingType =
  /** Без маркировки */
  | 'NOT_TRACKED'

  /** Тип маркировки "Табак" */
  | 'TOBACCO'

  /** Тип маркировки "Обувь" */
  | 'SHOES'

  /** Тип маркировки "Одежда" */
  | 'LP_CLOTHES'

  /** Тип маркировки "Постельное белье" */
  | 'LP_LINENS'

  /** Духи и туалетная вода */
  | 'PERFUMERY'

  /** Фотокамеры и лампы-вспышки */
  | 'ELECTRONICS'

  /** Шины и покрышки */
  | 'TIRES'

  /** Молочная продукция */
  | 'MILK'

  /** Альтернативная табачная продукция */
  | 'OTP'

export type PaymentItemType =
  /** Товар */
  | 'GOOD'

  /** Подакцизный товар */
  | 'EXCISABLE_GOOD'

  /** Составной предмет расчета */
  | 'COMPOUND_PAYMENT_ITEM'

  /** Иной предмет расчета   */
  | 'ANOTHER_PAYMENT_ITEM'

export type GoodMetaType = 'product' | 'service' | 'bundle'

// TODO AbstractGoodFields: Обратить внимание на то, что наследуются поля ProductFolder ..
// .. сам тип не является базовым для товаров. Правильно?

export type AbstractGoodFields = ProductFolderFields & {
  /** ID синхронизации */
  readonly syncId?: string

  uom?: EntityRef<'uom'>

  /**
   * Массив метаданных Изображений (Максимальное количество изображений - 10)
   * */
  images: CollectionRef<'image'>

  minPrice: Price

  salePrices: SalePrice[]

  buyPrice: Price

  supplier?: EntityRef<'counterparty' | 'organization'>

  attributes: Attribute[]

  country?: EntityRef<'country'>

  article?: string

  weight: number

  volume: number

  packs?: Pack[]

  alcoholic?: {
    excise?: boolean

    /** Код вида продукции */
    type?: number

    /** Крепость (Float) */
    strength?: number

    volume?: number
  }

  /** Количество модификаций у данного товара */
  readonly variantsCount: number

  /** Неснижаемый остаток */
  minimumBalance?: number

  /**
   * Учет по серийным номерам.
   * Не может быть указан вместе с `alcoholic` и `weighed`
   */
  isSerialTrackable: boolean

  /** Серийные номера */
  things?: string[]

  /**
   * Штрихкоды Комплекта.
   *
   * Для обновления списка штрихкодов необходимо передавать их полный список,
   * включающий как старые, так и новые значения. Отсутствующие значения
   * штрихкодов при обновлении будут удалены. При обновлении списка штрихкодов
   * валидируются только новые значения. Ранее сохраненные штрихкоды не
   * валидируются. То есть, если один из старых штрихкодов не соответствует
   * требованиям к валидации, то ошибки при обновлении списка не будет. Если на
   * вход передан пустой список штрихкодов или список из пустых значений, то
   * ранее созданные штрихкоды будут удалены.
   *
   * Особенности создания списка штрихкодов при создании комплекта:
   *
   * - Если передать список штрихкодов на вход, то полученные значения штрихкодов сохраняются, а пустые значения игнорируются.
   * - Если передать список из пустых значений штрихкодов на вход, то для продукции не будет создано ни одного штрихкода.
   * - Если не передать на вход атрибут barcodes или передать пустой список в нем, то по умолчанию будет создан один случайный штрихкод типа EAN13 для продукции.
   * */
  barcodes?: Barcode[]

  /** Признак запрета скидок */
  discountProhibited: boolean

  /** Код ТН ВЭД */
  tnved?: string

  /**
   * Управление состоянием частичного выбытия маркированного товара.
   *
   * `true` - возможность включена.
   */
  partialDisposal?: boolean

  /** Тип маркируемой продукции. */
  trackingType: TrackingType

  /** Признак предмета расчета. */
  paymentItemType: PaymentItemType

  /**
   * Код вида номенклатурной классификации медицинских средств индивидуальной
   * защиты (EAN-13).
   * */
  ppeType?: string

  files: CollectionRef<'files'>
}

export type AbstractGood<T extends GoodMetaType> = Entity<T> &
  AbstractGoodFields

export type AbstractGoodPatch = OptionalNullablePartial<
  Pick<
    AbstractGoodFields,
    | 'uom'
    // TODO AbstractGoodPatch: 'images'
    | 'minPrice'
    | 'salePrices' // TODO AbstractGoodPatch: 'salePrices'
    | 'buyPrice'
    | 'supplier'
    | 'country'
    | 'article'
    | 'weight'
    | 'volume'
    | 'alcoholic'
    | 'minimumBalance'
    | 'isSerialTrackable'
    | 'things'
    | 'barcodes'
    | 'discountProhibited'
    | 'tnved'
    | 'partialDisposal'
    | 'trackingType'
    | 'paymentItemType'
    | 'ppeType'
    | 'files'
  > & {
    attributes: AttributePatch[]
  } & ProductFolderPatch & {
      /**
       * Для того, чтобы создать новую упаковку для данного товара, нужно в
       * запросе на обновление товара указать ее как элемент поля packs,
       * а в ее составе указать ссылку в формате meta на единицу измерения и
       * количество товаров в упаковке.
       *
       * Для упаковки товара нельзя указать ссылку на единицу измерения,
       * совпадающую с единицей измерения товара, иначе возникнет ошибка.
       *
       * При обновлении штрихкодов упаковки в рамках обновления товара,
       * переданная коллекция штрихкодов упаковки полностью заменяет имеющуюся
       * до этого коллекцию.
       *
       * Для обновления списка упаковок товара, необходимо в рамках обновления
       * товара передать новую коллекцию упаковок.
       *
       * Новая коллекия упаковок товара полностью заменит старую коллекцию.
       */
      packs?: Pick<Pack, 'uom' | 'quantity'>
    }
>
