import React, { useEffect } from "react";
import CourseTile from "../atoms/courseTile/courseTile";
import { CourseModel } from "../../models/courseModel";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./courseTileContainer.style.css";
import { sagaActionsConstants } from "../../sagas/sagaActionConstants";
import { RootState } from "../../redux/store/store";

export default function CoursesTileContainer() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.searchedList);
  const isLoading = useSelector((state: RootState) => state.courses.isLoading);

  useEffect(() => {
    dispatch({ type: sagaActionsConstants.FETCH_COURSES_SAGA_ACTION });
  }, []);
  if (isLoading)
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );

  const courseTiles = courses.courses.map((course: CourseModel) => {
    return <CourseTile key={course?.id} course={course} />;
  });

  return <div className="courses-container">{courseTiles}</div>;
}
