import React, { useContext, useReducer, useState } from "react";
import authRedducer from "../reducers/authReducer";
import AuthContext from "../contexts/AuthContext";
import useAuthStore from "./store";

const LonginStatus = () => {
  const { user, login, logout } = useAuthStore();
  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
        <a onClick={() => logout()} href="#">
          Logout
        </a>
      </div>
    );
  return (
    <div>
      <a onClick={() => login("Okechukwu.Benjamin")} href="#">
        Login
      </a>
    </div>
  );
};

export default LonginStatus;
