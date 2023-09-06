import React, { useContext, useReducer, useState } from "react";
import authRedducer from "../reducers/authReducer";
import AuthContext from "../contexts/AuthContext";

const LonginStatus = () => {
  // const [user, setUser] = useState('')
  const { user, dispatch } = useContext(AuthContext);
  if (user)
    return (
      <div>
        <span className="mx-2">{user}</span>
        <a onClick={() => dispatch({ type: "Logout" })} href="#">
          Logout
        </a>
      </div>
    );
  return (
    <div>
      <a
        onClick={() =>
          dispatch({ type: "Login", username: "Okechukwu.benjamin" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LonginStatus;
