import React, { useEffect, useReducer } from "react";
import { appReducer } from "../reducers/appReducer";
// need to provide context here
export const AppContext = React.createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    isMobile: false,
    language: "en",
  });

  // need to fix appReducer to use this properly
  // better plan would to be to use meida queries for reactive design
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch({ type: "SET_IS_MOBILE", payload: true });
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
