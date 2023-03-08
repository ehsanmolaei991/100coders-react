import React from "react";
import Wrapper from "../components/hoc/Wrapper";

function Hoc() {
  return <div>Hi From HOC</div>;
}

export default Wrapper(Hoc, "Some Class Here");
