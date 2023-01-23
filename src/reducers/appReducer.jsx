// create a app reducer

// Path: reducers/appReducer.jsx

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      // console.log("isMobile", action.payload);
      return { ...state, isMobile: action.payload };
      break;

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
      break;
    default:
      return state;
  }
};
