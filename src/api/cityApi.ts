import { ListResponse } from './../model/common';
import { Params } from '../model/common';
import { City } from './../model/city';
import AxiosClient from '.';

export const userApi = {
  getAll(params: Params): Promise<ListResponse<City>> {
    return AxiosClient.get('/cities', { params });
  },
};
