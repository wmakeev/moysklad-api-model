export enum BarcodeType {
  Code128 = 'code128',
  EAN13 = 'ean13',
  EAN8 = 'ean8',
  GTIN = 'gtin',
  UPC = 'upc'
}

export type Barcode = {
  [type in BarcodeType]: string
}
