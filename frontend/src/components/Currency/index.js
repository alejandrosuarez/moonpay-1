import React from "react";
import { SORT_BY_NAME } from "../../settings/constants";
import { Box, Text } from "grommet";
import "./index.scss";
import translations from "./i18n";
import { useSelector } from "react-redux";

const Currency = ({ currency = {}, sortBy }) => {
  // Get local from redux state for the translations
  const { locale } = useSelector((state) => state.locale);

  return (
    <>
      {sortBy === SORT_BY_NAME ? (
        <Text>
          {currency?.code} - <b>{currency?.name?.toUpperCase()}</b>
        </Text>
      ) : (
        <Text data-testid="title-code">
          <b>{currency?.code?.toUpperCase()}</b> - {currency?.name}
        </Text>
      )}
      <Box direction="row" align="center" justify="center" gap="small">
        {currency.isSupportedInUS && (
          <Box
            size="small"
            pad={{ horizontal: "small" }}
            background="accent-3"
            round="small"
          >
            <Text size="xsmall" data-testid="tag-us">
              {translations[locale].tagUS}
            </Text>
          </Box>
        )}
        {currency.supportsTestMode && (
          <Box
            size="small"
            background="accent-1"
            round="small"
            pad={{ horizontal: "small" }}
          >
            <Text size="xsmall" data-testid="tag-test-mode">
              {translations[locale].tagTestMode}
            </Text>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Currency;
