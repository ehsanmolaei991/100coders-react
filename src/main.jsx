import React from "react";
import ReactDOM from "react-dom/client";

// Screens
import UseMemoPage from "./pages/UseMemoPage";
// import SomeChange from "./pages/SomeChange";
import All from "./pages/All";
import Hoc from "./pages/Hoc";
import Auth from "./pages/Auth";
import AuthContextProvider from "./context/auth-context";
import CustomHook from "./pages/CustomHook";
import App from "./pages/SomeChange";
import Test from "./pages/Test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <UseMemoPage /> */}
    {/* <App /> */}
    {/* <Hoc /> */}
    {/* <All /> */}
    {/* <AuthContextProvider>
      <Auth />
    </AuthContextProvider> */}
    {/* <CustomHook /> */}
    <Test />
  </>
);
