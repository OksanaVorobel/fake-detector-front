import {api} from "../../../lib/axios";
import storage from "../../../lib/storage";

import {AuthResponse, LoginRequest, SignUpRequest} from '../types';

export const login = async (form_data: LoginRequest) => {
  var bodyFormData = new FormData();
  bodyFormData.append("username", form_data.email);
  bodyFormData.append("password", form_data.password);
  console.log("bodyFormData", bodyFormData, form_data)
  return api
    .post<AuthResponse>('/users/sign_in', bodyFormData)
    .then((res: { data: { access_token: any; }; }) => res.data.access_token)
    .then(storage.setToken);
};

export const signup = async (form_data: SignUpRequest) => {
  return api
    .post<AuthResponse>('/users/sign_up', form_data)
    .then((res: { data: { access_token: any; }; }) => res.data.access_token)
    .then(storage.setToken);
};

export const isUserAuthorized = () => {
  return api.get('/users/me')
}

