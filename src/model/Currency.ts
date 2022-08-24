import type { OptionalNullablePartial } from '../tools'
import type { Entity } from './Entity'

export type CurrencyRateUpdateType = 'manual' | 'auto'

export type CurrencyUnitGender = 'masculine' | 'feminine'

export type CurrencyFields = {
  readonly system: boolean
  name: string
  fullName: string
  rate: number
  multiplicity: number
  indirect: boolean
  readonly rateUpdateType: CurrencyRateUpdateType
  code: string
  isoCode: string
  majorUnit: {
    gender: CurrencyUnitGender
    s1: string
    s2: string
    s5: string
  }
  minorUnit: {
    gender: CurrencyUnitGender
    s1: string
    s2: string
    s5: string
  }
  archived: boolean
  readonly default: boolean
}

export type Currency = Entity<'currency'> & CurrencyFields

// https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-valuta-izmenit-valutu

/**
 * - Нельзя указать курс валюты `rate` равным нулю, а также пустые поля `name`, `code`, `isoCode`.
 * - Нельзя изменять значения полей `name`, `fullName`, `code`, `isoCode`, `majorUnit`, `minorUnit` для валют, основанных на системном справочнике валют.
 * - Нельзя изменять курс валюты учета.
 * - Нельзя изменить курс валюты с автоматическим обновлением.
 */
export type CurrencyPatch = OptionalNullablePartial<CurrencyFields>
