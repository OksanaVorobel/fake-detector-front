export interface Image {
  id: number
  image_url: string
  ela_image_url: string
}

export interface PredictionResponse {
  fake: number
  real: number
}

export interface LoadImageResponse {
  origin: string
  ela: string
}
