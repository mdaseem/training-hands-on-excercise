import React from "react";
import "./cartCourses.style.css";
import { CourseModel } from "../../../models/courseModel";
import Ratings from "../ratings/ratings";
import { removeCartCourse } from "../../../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";

type cartCoursePropsType = {
  course: CourseModel;
};

export default function CartCourses(props: cartCoursePropsType) {
  const { course } = props;
  const dispatch = useDispatch();

  return (
    <div className="cart-course-container">
      <div className="cart-lower-container-course">
        <img
          src={course.imageUrl}
          alt={course.title}
          height={"80px"}
          width={"130px"}
        />
        <div className="title-description">
          <p className="cart-course-title title-items">{course.title}</p>
          <p className="title-items trainer-name">By {course.trainerName}</p>
          <Ratings totalRatings={course.totalRating} ratings={course.rating} />
          <p className="trainer-name">13 total hours</p>
        </div>
        <div className="delete-container">
          <button
            className="remove-cart-item"
            onClick={() => {
              dispatch(removeCartCourse(course));
            }}
          >
            Remove
          </button>
          <div className="remove-cart-item">move To wishlist</div>
        </div>
        <div className="price-container">
          <p className="discount-price">&#8377;{course?.discountPrice}</p>
          <p className="actual-price">
            <div className="strike-line" />
            &#8377;{course?.actualPrice}
          </p>
        </div>
        <div className="cart-courses-total"></div>
      </div>
    </div>
  );
}
