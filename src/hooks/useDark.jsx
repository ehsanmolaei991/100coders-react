import { useState } from "react";

export default function useDark() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark((prevState) => {
      localStorage.setItem("theme", `${!prevState}`);
      document.querySelector("html").setAttribute("dark", !prevState);
      return !prevState;
    });
  };

  return [isDark, toggleDark];
}
