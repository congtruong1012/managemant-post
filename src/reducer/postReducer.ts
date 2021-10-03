import {
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
  GET_OVERVIEW,
  GET_OVERVIEW_SUCCESS,
  GET_OVERVIEW_FAIL,
} from './../constant/post';
import produce from 'immer';
import { AnyAction } from 'redux';
import { GET_DASHBOARD } from '../constant';
import { Post } from '../model';

const initialState = {
  posts: [],
  isLoadingDashboard: false,
  dashboard: {
    post: 0,
    like: 0,
    comment: 0,
    share: 0,
  },
  isLoadingOverview: false,
  overview: {
    newest: [] as Array<Post>,
    mostLikes: [] as Array<Post>,
    mostComments: [] as Array<Post>,
    mostShares: [] as Array<Post>,
  },
};
const postReducer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case 'GET_POST':
        draft.posts = state.posts;
        break;

      case GET_DASHBOARD:
        draft.isLoadingDashboard = true;
        break;
      case GET_DASHBOARD_SUCCESS:
        draft.isLoadingDashboard = false;
        draft.dashboard = action.payload.data;
        break;
      case GET_DASHBOARD_FAIL:
        draft.isLoadingDashboard = false;
        draft.dashboard = action.message;
        break;

      case GET_OVERVIEW:
        draft.isLoadingOverview = true;
        break;
      case GET_OVERVIEW_SUCCESS:
        draft.isLoadingOverview = false;
        draft.overview = action.payload;
        break;
      case GET_OVERVIEW_FAIL:
        draft.isLoadingOverview = false;
        draft.overview = action.message;
        break;
    }
  });

export default postReducer;
