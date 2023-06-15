import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { sagaActionsConstants } from "./sagaActionConstants";
import {
  isCourseLoading,
  setCourseById,
  setCourses,
} from "../redux/reducers/coursesReducer";
import { CourseModel } from "../models/courseModel";
import { setSearchedCourses } from "../redux/reducers/searchCourseReducer";
import { UserModel } from "../models/userModel";
import { setUser } from "../redux/reducers/userReducer";

type Response = {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

function GetCourses() {
  return axios.get<CourseModel[]>("http://localhost:3500/courses", {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
}

function getUser() {
  return axios.get<UserModel[]>(`http://localhost:3500/user/userData/${localStorage["userId"]}`);
}

function GetCourseById(id: number) {
  return axios.get<CourseModel[]>(`http://localhost:3500/courseDetail/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
}

export function* fetchCourses() {
  try {
    yield put(isCourseLoading(true));
    const response: Response = yield call(GetCourses);
    yield put(setCourses(response.data)); // dispatching
    yield put(setSearchedCourses(response.data));
    const userResponse: Response = yield call(getUser)
    yield put(setUser(userResponse.data));
    yield put(isCourseLoading(false));
  } catch (error) {}
}

export function* fetchCourseById(action: PayloadAction<number>) {
  try {
    yield put(isCourseLoading(true));
    const response: Response = yield call(GetCourseById, action.payload);
    yield put(setCourseById(response.data));
    yield put(isCourseLoading(false));
  } catch (error) {
    console.log('called--------',error);
    yield put(isCourseLoading(false));
  }
}

export function* coursesSaga() {
  console.log("Root Saga..");
  yield takeLatest(
    sagaActionsConstants.FETCH_COURSES_SAGA_ACTION,
    fetchCourses
  );
  yield takeLatest(sagaActionsConstants.FETCH_COURSE_BY_ID, fetchCourseById);
}

export default coursesSaga;
