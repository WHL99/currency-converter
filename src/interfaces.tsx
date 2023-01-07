export interface Amount {
  amount: number;
}

export interface Currency {
  amount: number;
  currency: {
    name: string;
    symbol: string;
    code: string;
    img: string;
    exchangeRate: number;
  };
}
