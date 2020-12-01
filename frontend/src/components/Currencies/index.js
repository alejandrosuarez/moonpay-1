import React, { useEffect, useState } from "react";
import Currency from "../Currency";
import * as API from "../../services/api";
import { ApiRoutes } from "../../settings/routes";
import "./index.scss";
import translations from "./i18n";
import { SORT_BY_RANDOM } from "../../settings/constants";
import { useSelector } from "react-redux";

const Currencies = () => {
  // Get the filter state from redux state
  const filter = useSelector((state) => state.filter);
  const { locale } = useSelector((state) => state.locale);

  // Arrow function States
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  /**
   * Use Effect when the component is mounted
   */
  useEffect(() => {
    getCurrencies();
  }, []);

  /**
   * Use Effect when the filter state is updated
   */
  useEffect(() => {
    handleCurrencies(currencies);
  }, [filter]);

  /**
   * Method to get currencies
   */
  const getCurrencies = () => {
    // Call API to get currencies
    API.get(ApiRoutes.CURRENCIES)
      .then((data) => {
        setCurrencies([...data]);
        handleCurrencies([...data]);
      })
      .catch((error) => {
        // Init states
        setCurrencies([]);
      });
  };

  /**
   * Method to apply filters and sort in the currencies list
   * @param data
   */
  const handleCurrencies = (data) => {
    let items = filterCurrencies(data);
    setFilteredCurrencies(sortCurrencies(items));
  };

  /**
   * Method to filter
   */
  const filterCurrencies = (items) => {
    return items.filter(
      (currency) =>
        (filter.isSupportsTestMode ? currency.supportsTestMode : true) &&
        (filter.isSupportedInUS ? currency.isSupportedInUS : true)
    );
  };

  /**
   * Method to sort by name, code or to shuffle currencies
   */
  const sortCurrencies = (items) => {
    let sortedCurrencies = [];

    if (filter.sortBy === SORT_BY_RANDOM) {
      // Shuffle the list
      sortedCurrencies = items.sort(() => 0.5 - Math.random());
    } else {
      // Sort by name or by code the list
      sortedCurrencies = items.sort((currencyFirst, currencySecond) => {
        if (currencyFirst[filter.sortBy] < currencySecond[filter.sortBy]) {
          return -1;
        }
        if (currencyFirst[filter.sortBy] > currencySecond[filter.sortBy]) {
          return 1;
        }
        return 0;
      });
    }

    return sortedCurrencies;
  };

  return (
    <>
      <h1>
        {filteredCurrencies.length} {translations[locale].textResults}
      </h1>
      <ul className="m-currencies">
        {filteredCurrencies.map((currency, index) => (
          <li key={index} className="m-currencies__item">
            <Currency currency={currency} sortBy={filter.sortBy} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Currencies;
