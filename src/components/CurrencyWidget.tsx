import React from "react";
import { Currency } from "../interfaces";

function CurrencyWidget({ amount, currency }: Currency) {
  const convertedAmount = amount * currency?.exchangeRate;
  const convertedAmountFixed = convertedAmount.toFixed(2);

  return (
    <div className="CurrencyWidget">
      <img src={currency?.img} className="widget-img" alt="background" />
      <h3>
        {currency?.name} - {currency?.symbol}
      </h3>

      <p>
        {convertedAmountFixed} {currency?.symbol}
      </p>
      <p>=</p>
      <p>{convertedAmount} $</p>
    </div>
  );
}

export default CurrencyWidget;
