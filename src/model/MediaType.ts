export const mediaType = {
  ApplicationJson: 'application/json',
  ApplicationOctetStream: 'application/octet-stream',
  ImagePng: 'image/png'
} as const

export type MediaType = typeof mediaType[keyof typeof mediaType]
