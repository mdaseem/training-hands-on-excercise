import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/courseModel";

const initialState = {
  courses: [new CourseModel()],
  isLoading: false,
  courseById: new CourseModel(),
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (store, { payload }: PayloadAction<CourseModel[]>) => {
      store.courses = [...payload];
      return store;
    },
    isCourseLoading: (store, action: PayloadAction<boolean>) => {
      store.isLoading = action.payload;
      return store;
    },
    setCourseById: (store, { payload }: PayloadAction<CourseModel>) => {
      store.courseById = payload;
      return store;
    },
  },
});

export const { setCourses, isCourseLoading, setCourseById } =
  coursesSlice.actions;
export default coursesSlice.reducer;
