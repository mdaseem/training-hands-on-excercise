import React, { useEffect, useState } from "react";
import "./searchbar.style.css";
import { RootState } from "../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { CourseModel } from "../../models/courseModel";
import { setSearchedCourses } from "../../redux/reducers/searchCourseReducer";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses);
  const coursesSearched: CourseModel[] = [];

  useEffect(() => {
    courses?.courses?.forEach((item: CourseModel) => {
      if (item.title.toLowerCase().includes(inputValue?.toLowerCase())) {
        coursesSearched.push(item);
      }
    });

    dispatch(setSearchedCourses(coursesSearched));
  }, [inputValue]);

  return (
    <input
      className="search-bar"
      type="text"
      value={inputValue}
      placeholder="Search your courses"
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}
