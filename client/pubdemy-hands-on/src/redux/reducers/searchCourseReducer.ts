import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/courseModel";

const initialState = {
  courses: [new CourseModel()],
};

export const searchedCoursesSlice = createSlice({
  name: "searchedList",
  initialState,
  reducers: {
    setSearchedCourses: (store, action: PayloadAction<CourseModel[]>) => {
      store.courses = [...action.payload];
      return store;
    },
  },
});

export const { setSearchedCourses } = searchedCoursesSlice.actions;
export default searchedCoursesSlice.reducer;
