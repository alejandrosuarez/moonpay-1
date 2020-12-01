import { LOCALE_CHANGE } from "./locale.types";

export const localeChange = (locale) => {
  return {
    type: LOCALE_CHANGE,
    payload: locale,
  };
};
