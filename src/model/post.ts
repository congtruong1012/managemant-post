import { Params } from './common';

export interface ParamsSearch extends Params {
  author?: string;
  approved?: 'W' | 'A' | 'C';
  type?: 0 | 1 | 2;
}

export interface Post {
  id: number;
  description: string;
  author: number;
  like: number;
  comment: number;
  share: number;
  approved: 'W' | 'A' | 'C';
  type: 0 | 1 | 2;
  createdAt: string;
}
