import { useEffect } from "react";

const UseResizeHook = setWidth => {
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [setWidth]);
}

export default UseResizeHook