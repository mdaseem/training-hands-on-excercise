import React, { useEffect } from "react";
import "./courseDetail.style.css";
import Ratings from "../atoms/ratings/ratings";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import { sagaActionsConstants } from "../../sagas/sagaActionConstants";
import { setCartCourses } from "../../redux/reducers/cartReducer";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector((state: RootState) => state.courses.courseById);
  const cartCourses = useSelector((state: RootState) => state.cartcourses);

  useEffect(() => {
    dispatch({ type: sagaActionsConstants.FETCH_COURSE_BY_ID, payload: id });
  }, []);

  return (
    <>
      <div className="course-detail-container">
        <div className="course-detail-left-container">
          <div className="course-left-title">{course?.title}</div>
          <p className="course-left-auther">
            A course by {course?.trainerName}
          </p>
          <div className="rating-speacial-status">
            <p className="special-status">{course?.specialStatus}</p>
            <Ratings
              ratings={course?.rating || 0}
              totalRatings={course?.totalRating || 0}
            />
          </div>
          <p className="trainer-details">Created by {course?.trainerName}</p>
          <p className="course-status">
            <p className="course-update">last updated: 20-03-2023</p>
            <p className="course-language">English</p>
          </p>
          <div className="learning-container">
            <h1>What you will Learn</h1>
            <ul className="list-of-learning ">
              <li className="list-items">
                <i className="fa-solid fa-check" />
                complete project setup
              </li>
              <li className="list-items">
                <i className="fa-solid fa-check" />
                setup a database
              </li>
              <li className="list-items">
                <i className="fa-solid fa-check" />
                full stack development
              </li>
            </ul>
          </div>
          <div className="requirements-details">
            <h1>Requirements</h1>
            <ul>
              <li className="requirements-list-iitems"> basic understanding of the programming</li>
              <li className="requirements-list-iitems"> code editor VsCode preffered</li>
              <li className="requirements-list-iitems"> basic javascript understanding</li>
            </ul>

          </div>
          <div>
            <h1 className="description">
              Description
            </h1>
          <p className="description">
              basic description about the topics that are going to be covered in this course. each module will consists of quiz that you will have to clear to get certified at the end of the course
          </p>
          </div>
        </div>
        <div className="course-detail-right-container">
          <img
            className="course-image"
            alt={`${course?.title} course`}
            src={course?.imageUrl}
            height={"200px"}
            width={"250px"}
          />
          <div className="buy-course-container">
            <div className="course-price">&#8377;{course?.discountPrice}</div>
            <div className="atc-container">
              <button
                className="add-to-cart"
                onClick={() => {
                  const coursePresent = cartCourses?.find(
                    (item) => item.id === course?.id
                  );
                  if (!coursePresent) {
                    dispatch(setCartCourses([course]));
                  }
                }}
              >
                Add to Cart
              </button>
              <div className="wish-list">
                <div className="wish-list-icon">
                  <i className="fa-regular fa-heart fa-xl" />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/dashboard/checkout");
              }}
              className="buy-now"
            >
              Buy now
            </button>
          </div>
          <p className="offer-detail">30 days money-back guarantee</p>
          <div className="course-details-container">
            <div className="course-detail">this course includes:</div>
            <ul className="list-of-details">
              <li className="course-list-iitems"> 10 hours of online video</li>
              <li className="course-list-iitems">90 downloadable resources</li>
              <li className="course-list-iitems">full lifetime access</li>
              <li className="course-list-iitems">Access on mobile and TV</li>
              <li className="course-list-iitems">Certificate of Completion</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute-background" />
    </>
  );
}
