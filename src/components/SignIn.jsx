import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export default function SignIn() {
  const { loginHandler } = useContext(AuthContext);

  return (
    <>
      <h1>You have to signIn now, please click SignIn</h1>

      <button onClick={loginHandler}>SignIn</button>
    </>
  );
}
