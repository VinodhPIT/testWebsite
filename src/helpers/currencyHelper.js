// currencyHelper.js

import { useState } from "react";

const currencyOptions = [
  "GBP",
  "EUR",
  "CHF",
  "HUF",
  "CZK",
  "PLN",
  "RON",
  "SEK",
].map((data) => ({ value: data, label: data }));

const useCurrency = (initialCurrency = currencyOptions[1]) => {
  const [selectedCurrency, setSelectedCurrency] = useState(initialCurrency);
  return [selectedCurrency, setSelectedCurrency];
};

export { currencyOptions, useCurrency };
