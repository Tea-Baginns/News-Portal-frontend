import { useEffect, useState } from "react";

const checkDarkHook = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const checkTheme = localStorage.getItem("theme");
    if (checkTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme]);
  return { theme, setTheme };
};

export default checkDarkHook;
