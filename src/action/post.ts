import { DashboardPayload, Overview } from './../interface/post';
import {
  GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_OVERVIEW,
  GET_OVERVIEW_SUCCESS,
  GET_OVERVIEW_FAIL,
} from './../constant/post';
export function getDashboard() {
  return {
    type: GET_DASHBOARD,
  };
}

export function getDashboardSuccess(payload: DashboardPayload) {
  return {
    type: GET_DASHBOARD_SUCCESS,
    payload,
  };
}

export function getDashboardFail(message = '') {
  return {
    type: GET_DASHBOARD,
    message,
  };
}

export function getOverview() {
  return {
    type: GET_OVERVIEW,
  };
}

export function getOverviewSuccess(payload: Overview) {
  return {
    type: GET_OVERVIEW_SUCCESS,
    payload,
  };
}

export function getOverviewFail(message = '') {
  return {
    type: GET_OVERVIEW_FAIL,
    message,
  };
}
