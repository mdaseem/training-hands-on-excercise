import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/coursesReducer";
import searchedCoursesReducer from "../reducers/searchCourseReducer";
import userReducer from "../reducers/userReducer";
import middleWare from "redux-saga";
import rootSaga from "../../sagas/rootSagas";
import cartReducer from "../reducers/cartReducer";

const sagaMiddleware = middleWare();
const store = configureStore({
  reducer: {
    courses: coursesReducer,
    searchedList: searchedCoursesReducer,
    user: userReducer,
    cartcourses: cartReducer,
  },
  middleware: (defalutMiddleWare) =>
    defalutMiddleWare({ serializableCheck: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
