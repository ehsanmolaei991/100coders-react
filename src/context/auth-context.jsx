import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  function loginHandler() {
    setIsAuth(true);
  }

  function logoutHandler() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
