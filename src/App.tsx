import CurrencyDashboard from "./components/CurrencyDashboard";
import { MouseEvent, useState } from "react";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const handleClick = (event: MouseEvent) => {
    // X event.target.value
    const target = event.target as HTMLButtonElement;
    if (target.value === "1") {
      setAmount((prev) => prev + 1);
    }
    if (target.value === "10") {
      setAmount((prev) => prev + 10);
    }
    if (target.value === "100") {
      setAmount((prev) => prev + 100);
    }
    if (target.value === "reset") {
      setAmount(0);
    }
  };
  return (
    <div className="App">
      <h2>{amount} $</h2>

      <button onClick={handleClick} value="reset">
        Reset
      </button>
      <button onClick={handleClick} value="1">
        +1
      </button>
      <button onClick={handleClick} value="10">
        +10
      </button>
      <button onClick={handleClick} value="100">
        +100
      </button>

      <CurrencyDashboard amount={Number(amount)} />
    </div>
  );
}

export default App;
