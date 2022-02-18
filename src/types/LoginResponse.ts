export interface Login {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  created_at: number;
}

export interface LoginError {
  message: string;
}

export interface LoginResponse {
  status: number;
  data: Login | null;
  error: LoginError | null;
}
