import React, { useEffect } from "react";
import "./loginPage.style.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserModel } from "../../models/userModel";
import Header from "../common/header/header";
import { sagaActionsConstants } from "../../sagas/sagaActionConstants";
import { RootState } from "../../redux/store/store";

type userData = {
  userEmail: string;
  userPassword: string;
};

export default function Login() {
  const userErrors = useSelector(
    (state: RootState) => state.user.error
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({ mode: "onChange" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserAuthorized = useSelector(
    (state: RootState) => state.user.isUserAuthorized
  );
  const onSubmit = (e: userData) => {
    const user = new UserModel(e.userEmail, e.userPassword);
    dispatch({ type: sagaActionsConstants.AUTHENTICATE_USER, payload: user });
  };

  useEffect(() => {
    if (isUserAuthorized) {
      navigate("/dashboard");
    }
  }, [isUserAuthorized]);

  return (
    <>
      <Header />
      <div className="login-page-container">
        <div className="login-description">Login to your Pubdemy Account!</div>
        <br />
        <div className="dividing-line" />
        <div className="other-options common-style">
          <i className="fa-brands fa-facebook" /> Continue with facebook
        </div>
        <div className="other-options common-style">
          <i className="fa-brands fa-google" /> Continue with Google
        </div>
        <div className="other-options common-style">
          <i className="fa-brands fa-apple" /> Continue with Apple
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
            className="form-inputs common-style"
          />
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
            className={` ${
              errors.userPassword && errors
            }form-inputs common-style`}
          />
          {
            userErrors && (
              <p className="error-messsage">
                invalid user or password
              </p>
            )
          }
          <button className="form-inputs common-style form-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account ? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </>
  );
}
