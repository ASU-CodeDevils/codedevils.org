import React, { useEffect, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";
export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    isMobile: false,
    language: "en",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch({ type: "SET_IS_MOBILE", payload: true });
      } else {
        dispatch({ type: "SET_IS_MOBILE", payload: false });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
