import React from "react";
import currencies from "./../currencies.json";
import CurrencyWidget from "./CurrencyWidget";
import { Amount } from "../interfaces";

function CurrencyDashboard({ amount }: Amount) {
  return (
    <div className="CurrencyPanel">
      <h1>Currencies</h1>

      <div className="flex-wrapper">
        <CurrencyWidget amount={Number(amount)} currency={currencies.eur} />
        <CurrencyWidget amount={Number(amount)} currency={currencies.gbp} />
        <CurrencyWidget amount={Number(amount)} currency={currencies.twd} />
        <CurrencyWidget amount={Number(amount)} currency={currencies.jpy} />
      </div>
    </div>
  );
}

export default CurrencyDashboard;
