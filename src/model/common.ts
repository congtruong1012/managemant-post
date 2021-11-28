export interface Params {
  _limit: number;
  _page: number;
  _sort?: string;
  _order?: 'asc' | 'desc';
}

export interface Pagination {
  _page: number;
  _totalPage: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: Pagination;
}
