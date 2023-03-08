import React, { useState } from "react";
import Text from "./Text";

export default function ChangeMode() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <p>Current Mode: {`${isShow}`}</p>
      <button onClick={() => setIsShow(!isShow)}>Change Mode</button>

      {/*  */}
    </div>
  );
}
