export interface LoginResponse {
  data: user;
  token: string;
}

export interface GenericMessage {
  status?: number;
  message: string;
}

interface user {
  name: string;
  surname: string;
  fullname: string;
  email: string;
}
