import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sagaActionsConstants } from "../sagas/sagaActionConstants";

export default function GetUserFromServer({ children }:any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: sagaActionsConstants.GET_USER });
  }, []);
  return children;
}
