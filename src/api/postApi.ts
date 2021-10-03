import { ListResponse } from './../model/common';
import { Params } from '../model/common';
import { Post } from './../model/post';
import AxiosClient from '.';
import { Dashboard } from '../interface/post';

export const postApi = {
  getDashboard(): Promise<Dashboard> {
    return AxiosClient.get('/dashboard');
  },
  getAll(params: Params): Promise<ListResponse<Post>> {
    return AxiosClient.get('/posts', { params });
  },
  getPostById(id: number): Promise<Post> {
    return AxiosClient.get(`/posts/${id}`);
  },
  create(body: Post): Promise<Post> {
    return AxiosClient.post('/posts', body);
  },
  update: (body: Partial<Post>): Promise<Post> =>
    AxiosClient.patch(`/posts/${body.id}`, body),
  delete: (id: number): Promise<Post> => AxiosClient.delete(`/posts/${id}`),
};
