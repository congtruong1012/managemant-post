export interface AuthParams {
  username: string,
  password: string
}

export interface AuthPayload {
  data: string | null,
  error: string,
}