export interface LoginRequest {
  email: string
  password: string
}

export interface SignUpRequest {
  email: string
  first_name: string
  last_name: string
  password: string
}

export interface AuthResponse {
  id: string;
  access_token: string;
  refresh_token: string;
}
