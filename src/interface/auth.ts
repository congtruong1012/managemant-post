export interface AuthParams {
  username: string;
  password: string;
}

export interface AuthPayload {
  data: {
    token: string;
    refreshToken: string;
  };
  error: string;
}
