import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/courseModel";

// const initialState: CourseModel= []

let initialState: CourseModel[] = [];

export const coursesSlice = createSlice({
  name: "cartcourses",
  initialState,
  reducers: {
    setCartCourses: (store, { payload }: PayloadAction<CourseModel[]>) => {
      store.push(...payload);
      return store;
    },
    removeCartCourse: (store, { payload }: PayloadAction<CourseModel>) => {
      store = store.filter((item) => item.id !== payload.id);
      return store;
    },
  },
});

export const { setCartCourses, removeCartCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
