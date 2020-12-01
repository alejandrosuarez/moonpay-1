import { FILTER_US, FILTER_TEST_MODE, FILTER_SORT } from "./filter.types";

export const filterBySupportedInUS = (filter) => {
  return {
    type: FILTER_US,
    payload: filter,
  };
};

export const filterBySupportsInTestMode = (filter) => {
  return {
    type: FILTER_TEST_MODE,
    payload: filter,
  };
};

export const filterSort = (sort) => {
  return {
    type: FILTER_SORT,
    payload: sort,
  };
};
