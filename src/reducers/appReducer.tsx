// languages
import en from "./../../public/langs/english/data";
import es from "./../../public/langs/spanish/data";

export const initialState = {
  currentPage: "/",
  currentLangData: en,
};

// gets the language data
const setLanguageData = (language) => {
  switch (language) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return en;
  }
};

const appReducer = (state, action) => {
  // console.log("action: ", action);

  switch (action.type) {
    case "SET_LANGUAGE": // will also be used for updating the language
      return {
        ...state,
        currentLangData: setLanguageData(action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
