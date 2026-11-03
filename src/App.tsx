import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(101);

  const a = () => {
    if (count < 110) {
      setCount((prev) => prev + 1);
      console.log(count);
    }
  };

  return (
    <div>
      <button
        onClick={() => a()}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        click
      </button>
      <button>{count}</button>
    </div>
  );
}

export default App;
