export type BarcodeType = 'code128' | 'ean13' | 'ean8' | 'gtin' | 'upc'

export type Barcode = {
  [type in BarcodeType]: string
}
