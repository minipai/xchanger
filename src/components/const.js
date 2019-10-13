import counties from "src/const/countries";
import { rates } from "src/const/rates.json";

export const countryOptions = Object.keys(rates).map(currencyCode => {
  const c = counties[currencyCode];
  return {
    key: c.currency_code,
    text: `${c.currency_code}`,
    value: c.currency_code
  };
});
