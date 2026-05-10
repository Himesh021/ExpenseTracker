import { useEffect, useState } from "react";

function CurrencyConverter({ total }) {
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0ababe7fa380a3345daf4a58/latest/USD",
    )
      .then((response) => response.json())
      .then((data) => {
        setRates(data.conversion_rates);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch exchange rates");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="card">
        <h2>Currency Converter</h2>
        <p>Loading exchange rates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <h2>Currency Converter</h2>
        <p>{error}</p>
      </div>
    );
  }

  const convertedAmount = total * rates[currency];

  return (
    <div className="card">
      <h2>Currency Converter</h2>

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="INR">INR</option>

        <option value="BRL">BRL</option>
        <option value="ZAR">ZAR</option>

        <option value="RUB">RUB</option>
      </select>

      <h3 className="currency-value">
        {currency}: {convertedAmount.toFixed(2)}
      </h3>
    </div>
  );
}

export default CurrencyConverter;
