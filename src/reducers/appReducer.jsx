// create a app reducer

// Path: reducers/appReducer.jsx

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return { ...state, isMobile: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    default:
      return state;
  }
};
