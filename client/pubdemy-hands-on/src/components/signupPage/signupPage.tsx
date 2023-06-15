import React from "react";
// import "../loginPage/loginPage.style.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../common/header/header";
import { UserModel } from "../../models/userModel";
import { sagaActionsConstants } from "../../sagas/sagaActionConstants";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (e: any) => {
    const user = new UserModel(e.userEmail, e.userPassword, e.fullName);
    dispatch({ type: sagaActionsConstants.ADD_NEW_USER, payload: user });
    navigate("/dashboard");
  };

  return (
    <>
      <Header />
      <div className="login-page-container">
        <div className="login-description">Sign up and start Learning!</div>
        <br />
        <div className="dividing-line" />

        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          {/* <i className="fa-sharp fa-solid fa-envelope email-icon"/> */}
          <input
            type="text"
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            className="form-inputs common-style"
          />
          {errors.userEmail && (
            <p className="error-messsage">email is not valid</p>
          )}
          <input
            type="email"
            {...register("userEmail", {
              required: true,
              validate: {
                maxLength: (v) =>
                  v.length <= 50 ||
                  "The email should have at most 50 characters",
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
            })}
            placeholder="Email"
            className={` ${
              errors.userEmail && "errors"
            } form-inputs common-style`}
          />
           {errors.userPassword && (
            <p className="error-messsage">
              eight characters, at least one letter and one number:
            </p>
          )}
          <input
            type="password"
            {...register("userPassword", {
              required: true,
              validate: {
                minLength: (v) => v.length >= 5,
                matchPattern: (v) =>
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v),
              },
            })}
            placeholder="Password"
            className="form-inputs common-style"
          />
          <button className="form-inputs common-style form-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account ? <Link to={"/login"}>Signin</Link>
        </p>
      </div>
    </>
  );
}
