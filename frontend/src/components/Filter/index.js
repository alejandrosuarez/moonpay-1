import React from "react";
import "./index.scss";
import translations from "./i18n";
import {
  SORT_BY_CODE,
  SORT_BY_NAME,
  SORT_BY_RANDOM,
} from "../../settings/constants";
import { CheckBox, Box, Menu, Text } from "grommet";
import { PowerCycle, FormDown, Descend } from "grommet-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySupportedInUS,
  filterBySupportsInTestMode,
  filterSort,
} from "../../redux/filter/filter.actions";

const Filter = () => {
  // Selector to get the redux state
  const filter = useSelector((state) => state.filter);
  const { locale } = useSelector((state) => state.locale);

  // Dispatch to update the redux state
  const dispatch = useDispatch();

  return (
    <Box
      pad="medium"
      direction="column"
      margin={{ vertical: "medium" }}
      className="p-filter"
      gap="medium"
    >
      <CheckBox
        toggle
        checked={filter.isSupportedInUS}
        onChange={(event) =>
          dispatch(filterBySupportedInUS(event.target.checked))
        }
        label={translations[locale].labelSupportedUS}
      />
      <CheckBox
        toggle
        checked={filter.isSupportsTestMode}
        onChange={(event) =>
          dispatch(filterBySupportsInTestMode(event.target.checked))
        }
        label={translations[locale].labelSupportsTestMode}
      />
      <Menu
        plain
        items={[
          {
            label: (
              <Box alignSelf="center">
                <Text color={filter.sortBy === SORT_BY_NAME ? "accent-1" : ""}>
                  {translations[locale].titleSortName}
                </Text>
              </Box>
            ),
            onClick: () => {
              dispatch(filterSort(SORT_BY_NAME));
            },
            icon: (
              <Box pad="small">
                <Descend size="medium" />
              </Box>
            ),
          },
          {
            label: (
              <Box alignSelf="center">
                <Text color={filter.sortBy === SORT_BY_CODE ? "accent-1" : ""}>
                  {translations[locale].titleSortCode}
                </Text>
              </Box>
            ),
            onClick: () => {
              dispatch(filterSort(SORT_BY_CODE));
            },
            icon: (
              <Box pad="small">
                <Descend size="medium" />
              </Box>
            ),
          },
          {
            label: (
              <Box alignSelf="center">
                <Text
                  color={filter.sortBy === SORT_BY_RANDOM ? "accent-1" : ""}
                >
                  {translations[locale].titleSortRandom}
                </Text>
              </Box>
            ),
            onClick: () => {
              dispatch(filterSort(SORT_BY_RANDOM));
            },
            icon: (
              <Box pad="small">
                <PowerCycle size="medium" />
              </Box>
            ),
          },
        ]}
      >
        {() => (
          <Box direction="row" gap="small" pad="small">
            <FormDown />
            <Text>{translations[locale].titleSort}</Text>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default Filter;
