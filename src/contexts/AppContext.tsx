import React, { useContext } from "react";

const AppContext = React.createContext({});

export function AppContextProvider({ children }) {
  return (
    <AppContext.Provider
      value={{
        // Add any global state here
        language: "en",
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
