import {api, BASE_URL} from "../../../lib/axios";

import {AddImageResponse, LoadImageResponse, PredictionResponse} from '../types';

export const predictImage = async (image_url: string) => {
  return api.post<PredictionResponse>(`/images/detect?image_url=${image_url}`)
};

export const uploadImage = async (image: File) => {
   const formData = new FormData();
   formData.append("image", image);
   return api.post<LoadImageResponse>('/images/upload', formData)
};

export const addImage = async (
    origin_image_url: string, ela_image_url: string, percentage_of_falsity: number
) => {
   return api.post<AddImageResponse>(
       `/images/add?origin_image_url=${origin_image_url}&ela_image_url=${ela_image_url}&percentage_of_falsity=${percentage_of_falsity}`
   )
};


export const getImages = async () => {
   return api.get<AddImageResponse[]>(`/images`)
};


export const getImageFileUrl = (image_url: string | undefined) => {
   return `${BASE_URL}/images/by-path/?image_path=${image_url}`
};

export const deleteImage = async (image_id: number) => {
   return api.delete<any>(`/images/${image_id}`)
};
