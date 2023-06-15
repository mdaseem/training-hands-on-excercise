import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../searchbar/searchbar";
import "./header.style.css";
import HeaderButton from "../../headerButton/headerButton";
import { RootState } from "../../../redux/store/store";
import { setUserAuthorize } from "../../../redux/reducers/userReducer";
import ProfileModal from "../../profileModal/profileModal";
import { Link } from "react-router-dom";

export default function Header() {
  const ref = useRef();
  const isUserAuthorized = useSelector(
    (state: RootState) => state.user.isUserAuthorized
  );
  const cartCourses = useSelector((state: RootState) => state.cartcourses);

  const [showModal, setShowModal] = useState(false);
  window.addEventListener(
    "click",
    () => {
      if (!ref) {
        setShowModal(false);
      }
    },
    true
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage["auth-token"]) {
      dispatch(setUserAuthorize(true));
    }
  }, []);

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <header className="container">
      <Link to={"/dashboard"} className="title">
        <h1 className="title">Pubdemy</h1>
      </Link>
      <SearchBar />
      <div className="buttons-container">
        {isUserAuthorized && (
          <>
            <p className="header-items">My learnings</p>
            <p className="header-items">
              <i className="fa-regular fa-heart fa-xl" />
            </p>
          </>
        )}
        <p className="header-items">
          {isUserAuthorized && (
            <>
              <i className="fa-solid fa-cart-shopping" />
              <div className="cart-count-container">
                <Link to={"/dashboard/cart"} className="cart-url">
                  <p className="cart-count">{cartCourses.length}</p>
                </Link>
              </div>
            </>
          )}
        </p>

        {user?.fullName && isUserAuthorized && (
          <button
            className="user-name header-items"
            onClick={() => setShowModal(true)}
          >
            {user?.fullName?.slice(0, 2)}
          </button>
        )}
        <div className="model-container">
          {showModal && <ProfileModal ref={ref} user={user} />}
        </div>
        {!isUserAuthorized && (
          <>
            <HeaderButton label={"Login"} />
            <HeaderButton label={"Signup"} />
          </>
        )}
      </div>
    </header>
  );
}
