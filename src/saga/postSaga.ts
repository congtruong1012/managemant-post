import { ListResponse } from './../model/common';
import { Post } from './../model/post';
import { Params } from './../model/common';
import { all } from 'redux-saga/effects';
import { DashboardPayload } from './../interface/post';
import { postApi } from './../api/postApi';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  getDashboardFail,
  getDashboardSuccess,
  getOverviewSuccess,
} from '../action';
import { GET_DASHBOARD, GET_OVERVIEW } from '../constant';
function* getDashboardApi() {
  try {
    const { getDashboard } = postApi;
    const res: DashboardPayload = yield call(getDashboard);
    if (res.data) {
      yield put(getDashboardSuccess(res));
    }
  } catch (error) {
    yield put(getDashboardFail());
  }
}

function* getSortOrder(_sort: string, _order: string) {
  const { getAll } = postApi;
  const res: ListResponse<Post> = yield call(getAll, {
    _limit: 10,
    _sort,
    _order,
  } as Params);
  return res;
}

function* getOverviewApi() {
  try {
    const res: Array<ListResponse<Post>> = yield all([
      getSortOrder('createdAt', 'desc'),
      getSortOrder('like', 'desc'),
      getSortOrder('comment', 'desc'),
      getSortOrder('share', 'desc'),
    ]);
    const [newest, mostLikes, mostComments, mostShares] = res.map(
      (item) => item.data
    );
    yield put(
      getOverviewSuccess({ newest, mostLikes, mostComments, mostShares })
    );
  } catch (error) {
    yield put(getDashboardFail());
  }
}

export default function* postSaga() {
  yield takeLatest(GET_DASHBOARD, getDashboardApi);
  yield takeLatest(GET_OVERVIEW, getOverviewApi);
}
