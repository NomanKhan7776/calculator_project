import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [currencyLi, setCurrencyLi] = useState([]);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((values) => {
        setCurrencyLi(values[currency]);
      });
  }, [currency]);

  return currencyLi;
};
export default useCurrencyInfo;
