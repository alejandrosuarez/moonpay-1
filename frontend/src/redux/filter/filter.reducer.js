import { SORT_BY_CODE } from "../../settings/constants";
import { FILTER_US, FILTER_TEST_MODE, FILTER_SORT } from "./filter.types";

const INITIAL_STATE = {
  isSupportedInUS: false,
  isSupportsTestMode: false,
  sortBy: SORT_BY_CODE,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_US:
      return {
        ...state,
        isSupportedInUS: action.payload,
      };

    case FILTER_TEST_MODE:
      return {
        ...state,
        isSupportsTestMode: action.payload,
      };

    case FILTER_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
