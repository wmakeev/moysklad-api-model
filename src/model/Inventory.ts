import type { DocumentWithPositions, DocumentWithPositionsPatch } from '.'

// export type InventoryFields = {}

export type Inventory = DocumentWithPositions<'inventory'> // & InventoryFields

export type InventoryPatch = DocumentWithPositionsPatch<'inventory'>
// & PartialNullable<Pick<InvoiceFields, 'paymentPlannedMoment'>>
