import { combineReducers } from "redux";

import filterReducer from "./filter/filter.reducer";
import localeReducer from "./locale/locale.reducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  locale: localeReducer,
});

export default rootReducer;
