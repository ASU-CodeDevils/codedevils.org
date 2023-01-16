// create a app reducer

// Path: reducers/appReducer.jsx

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      // console.log("isMobile", action.payload);
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
