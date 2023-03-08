import { useContext } from "react";
import SignIn from "../components/SignIn";
import Logout from "../components/Logout";
import { AuthContext } from "../context/auth-context";

export default function Auth() {
  const { isAuth } = useContext(AuthContext);

  return <>{!isAuth ? <SignIn /> : <Logout />}</>;
}
