import React from "react";
import "./cartPage.style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import CartCourses from "../atoms/cartCourses/cartCourses";
import { CourseModel } from "../../models/courseModel";
import { Link } from "react-router-dom";
import { getActualDiscountPrices } from "../utils/utils";

export default function CartPage() {
  const cartCourses = useSelector((state: RootState) => state.cartcourses);
  const cartCoursesData = cartCourses?.map((item: CourseModel) => {
    return <CartCourses course={item} />;
  });

  const {totalCount,actualTotalCount} = getActualDiscountPrices(cartCourses)
  if (cartCourses.length === 0) {
    return (
      <div className="No-courses-page">
        No items in Cart
        <Link to={"/dashboard"} className="learning-link">
          Start Learning
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-courses-container">
      <div className="cart-top-container">
        <h1>Shoping Cart</h1>
        <p>{cartCourses.length} Courses in the cart</p>
      </div>
      <div className="cart-total-courses">
        <div className="cart-lower-container">{cartCoursesData}</div>
        <div className="total-container">
          <p className="total-key">Total:</p>
          <div className="total-discount-price">
            &#8377;
            {totalCount}
          </div>
          <div className="total-actual-price">
            <div className="strike-line" />
            {actualTotalCount}
          </div>
          <p className="discount-price">discount 50%</p>
          <Link to={"/dashboard/checkout"} className="checkout-link">
            {" "}
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
