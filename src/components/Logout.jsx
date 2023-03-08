import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export default function Logout() {
  const { logoutHandler } = useContext(AuthContext);

  return (
    <>
      <h1>Success, Hey You Are Logged In Now</h1>
      {/*  */}
      <p>Please Click Logout</p>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}
