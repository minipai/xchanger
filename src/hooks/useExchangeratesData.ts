import { useState, useEffect } from "react";

const useExchangeratesData = (base = "AUD") => {
  const today = new Date().toISOString().split("T")[0];
  const cachedRates = localStorage.getItem(`${base}:${today}`);
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState(
    cachedRates ? JSON.parse(cachedRates) : null
  );

  useEffect(() => {
    const cachedRates = localStorage.getItem(`${base}:${today}`);
    const api = `https://api.exchangeratesapi.io/latest?base=${base}`;

    if (cachedRates) {
      setRates(JSON.parse(cachedRates));
      return;
    } else {
      setLoading(true);

      fetch(api)
        .then(res => res.json())
        .then(
          data => {
            localStorage.setItem(
              `${data.base}:${today}`,
              JSON.stringify(data.rates)
            );
            setRates(data.rates);
            setLoading(false);
          },
          () => {
            setLoading(false);
          }
        );
    }
  }, [base, today]);
  return { rates, loading };
};

export default useExchangeratesData;
