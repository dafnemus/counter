import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  return (
    <main>
      <h1>Counter:</h1>
      <button onClick={() => setStart(!start)}>count is {count}</button>
      {start && (
        <div className="btnContainer">
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
      )}
    </main>
  );
}

export default App;
