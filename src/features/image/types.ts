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

export interface AddImageResponse {
  id: number
  image_url: string
  ela_image_url: string
  percentage_of_falsity: number
}

