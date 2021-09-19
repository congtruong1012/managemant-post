import { ListResponse } from './../model/common';
import { Params } from '../model/common';
import { User } from './../model/user';
import AxiosClient from ".";

export const userApi = {
  getAll(params: Params) :Promise<ListResponse<User>> {
    return AxiosClient.get('/users', {params})
  },
}