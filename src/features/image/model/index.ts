import {api} from "../../../lib/axios";

import { LoadImageResponse, PredictionResponse} from '../types';

export const predictImage = async (image_url: string) => {
  return api
    .post<PredictionResponse>('/images/detect', {"image_url": image_url})
};

export const uploadImage = async (image: File) => {
  return api.post<LoadImageResponse>('/images/upload', image)
};

