import { LOCALE_CHANGE } from "./locale.types";

const INITIAL_STATE = {
  locale: "en",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCALE_CHANGE:
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
