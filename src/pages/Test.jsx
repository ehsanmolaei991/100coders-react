import { useState } from "react";

export default function Test() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
    console.log(!isDark)


    // setIsDark((prevState) => {
    //   console.log(prevState, "current State");
    //   console.log(isDark, "isDark");

    //   return !prevState;
    // });
  };

  return <div onClick={handleClick}>Click Me</div>;
}
