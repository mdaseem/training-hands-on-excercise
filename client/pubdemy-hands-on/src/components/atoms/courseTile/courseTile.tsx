import React from "react";
import { CourseModel } from "../../../models/courseModel";
import "./courseTile.style.css";
import Ratings from "../ratings/ratings";
import { Link } from "react-router-dom";
type courseTileProps = {
  course: CourseModel;
};

export default function CourseTile(props: courseTileProps) {
  const { course } = props;

  return (
    <div key={course.id} className="tile-container">
      <img
        src={course?.imageUrl}
        alt={course?.title}
        width={"250px"}
        height={"150px"}
      />
      <Link
        to={`/dashboard/coursedetails/${course.id}`}
        className="course-link"
      >
        <div className="course-title">{course?.title}</div>
      </Link>
      <div className="trainer-name">{course?.trainerName}</div>

      <Ratings ratings={course?.rating} totalRatings={course?.totalRating} />

      <div className="price-container">
        <div className="course-discount-price" aria-label="discount price">
          &#8377;{course?.discountPrice}
        </div>
        <div className="course-actual-price" aria-label="actual price">
          <div className="strike-line" />
          &#8377;{course?.actualPrice}
        </div>
      </div>
      <div className="special-status">{course?.specialStatus}</div>
    </div>
  );
}
