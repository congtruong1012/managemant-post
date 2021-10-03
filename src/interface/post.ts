import { Post } from './../model/post';
export interface Dashboard {
  post: number;
  like: number;
  comment: number;
  share: number;
}

export interface Overview {
  newest: Array<Post>;
  mostLikes: Array<Post>;
  mostComments: Array<Post>;
  mostShares: Array<Post>;
}

export interface DashboardPayload {
  data: Dashboard;
  error: string;
}
