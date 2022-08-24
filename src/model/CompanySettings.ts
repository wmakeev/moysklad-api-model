import type { Currency } from './Currency'
import type { Entity } from './Entity'
import type { PriceType } from './PriceType'

export type CompanySettingsDiscountStrategy = 'bySum' | 'byPriority'

export interface CompanySettings extends Entity<'companysettings'> {
  currency: Currency & { archived: false; default: true }
  priceTypes: PriceType[]
  discountStrategy: CompanySettingsDiscountStrategy
  globalOperationNumbering: boolean
  checkShippingStock: boolean
  checkMinPrice: boolean
  useRecycleBin: boolean
  useCompanyAddress: boolean
  companyAddress: string
}
