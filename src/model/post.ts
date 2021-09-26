enum Approved {
  W = 'W',
  A = 'A',
  C = 'C',
}

export interface Post {
  id: number;
  description: string;
  author: number;
  like: number;
  comment: number;
  share: number;
  approved: Approved;
  type: 0 | 1 | 2;
}
