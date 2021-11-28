import { AuthPayload } from './../interface/auth';
import { ListResponse } from './../model/common';
import { Params } from '../model/common';
import { User } from './../model/user';
import AxiosClient from '.';
import { AuthParams } from '../interface';

export const userApi = {
  login(params: AuthParams): Promise<AuthPayload> {
    return AxiosClient.post('/login', params);
  },
  getAll(params?: Params): Promise<ListResponse<User>> {
    return AxiosClient.get('/users', { params });
  },
};
