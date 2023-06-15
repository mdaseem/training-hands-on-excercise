import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { sagaActionsConstants } from "./sagaActionConstants";
import { UserModel } from "../models/userModel";
import {
  setError,
  setUser,
  setUserAuthorize,
} from "../redux/reducers/userReducer";

type Response = {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

function autherize(user: UserModel) {
  return axios.post<UserModel>("http://localhost:3500/auth/login/", {
    data: user,
  });
}

function newUser(user: UserModel) {
  return axios.post<UserModel>("http://localhost:3500/signup/", {
    data: user,
  });
}

function getUserData() {
  return axios.get<UserModel[]>(
    `http://localhost:3500/user/userData/${localStorage["userId"]}`
  );
}

function* getUser() {
  const userResponse: Response = yield call(getUserData);
  yield put(setUser(userResponse.data));
}

export function* authenticateUser({ payload }: PayloadAction<UserModel>) {
  try {
    yield put(setError(""));
    const response: Response = yield call(autherize, payload);

    if (response.status && response.data.token !== undefined) {
      localStorage["auth-token"] = response.data.token;
      yield put(setUserAuthorize(true));
      yield put(setUser(response.data.validUserData));
      localStorage["userId"] = response.data.validUserData._id;
    } else {
      yield put(setError(response.data.message));
    }
  } catch (error) {}
}

export function* addNewUser({ payload }: PayloadAction<UserModel>) {
  try {
    yield call(newUser, payload);
  } catch (error) {}
}

export function* userSaga() {
  console.log("Root Saga..");
  yield takeLatest(sagaActionsConstants.AUTHENTICATE_USER, authenticateUser);
  yield takeLatest(sagaActionsConstants.ADD_NEW_USER, addNewUser);
  yield takeLatest(sagaActionsConstants.GET_USER, getUser);
}

export default userSaga;
