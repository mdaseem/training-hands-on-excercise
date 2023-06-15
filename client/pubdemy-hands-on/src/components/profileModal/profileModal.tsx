import React from "react";
import "./profileModal.style.css";
import { UserModel } from "../../models/userModel";
import { useDispatch } from "react-redux";
import { setUserAuthorize } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

type modalProps = {
  user: UserModel;
  ref: any;
};

export default function ProfileModal(props: modalProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullName, userEmail } = props.user;
  return (
    <div id="Modal" className="profile-modal-container" ref={props.ref}>
      <div className="detail-container">
        <div className="name-symbol">Ma</div>
        <div className="profile-details">
          <div className="full-name">{fullName}</div>
          <div className="email-address">{userEmail}</div>
        </div>
      </div>
      <div className="list-of-actions-container">
        <ul className="list-of-actions">
          <li className="action-items">My Learning</li>
          <li className="action-items">
            <Link className="action-items" to={"/dashboard/cart"}>My Cart</Link>
          </li>
          <li className="action-items">Help</li>
          <li className="action-items">
            <button
              className="log-out"
              onClick={() => {
                localStorage["auth-token"] = "";
                dispatch(setUserAuthorize(false));
                navigate("/");
              }}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
