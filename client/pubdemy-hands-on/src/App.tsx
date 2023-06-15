import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/loginPage";
import "./App.css";
import Footer from "./components/common/footer/footer.component";
import SignupPage from "./components/signupPage/signupPage";
import CoursesTileContainer from "./components/courseTileContainer/courseTileContainer";
import CourseDetail from "./components/courseDetail/courseDetail";
import DashBoard from "./components/common/dashboard/dashboard";
import CheckAuth from "./components/checkAuth/checkAuth";
import CartPage from "./components/cartPage/cartPage";
import CheckoutPage from "./components/checkoutPage/checkoutPage";
import CheckoutSuccess from "./components/checkoutSuccess/checkoutSuccess";

function App() {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <CheckAuth>
                <DashBoard />
              </CheckAuth>
            }
          >
            <Route path="" element={<CoursesTileContainer />} />
            <Route path="coursedetails/:id" element={<CourseDetail />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkoutsuccess" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
