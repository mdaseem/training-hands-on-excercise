import React from "react";
import { Navigate } from "react-router-dom";
export default function CheckAuth({ children }: any) {
  let tokenPresent = localStorage["auth-token"];

  if (
    !tokenPresent ||
    tokenPresent === undefined ||
    tokenPresent === "undefined"
  ) {
    return <Navigate to="/" />;
  }
  return children;
}
