import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function Increment(e) {
    setState(state + 1);
  }
  function Decrement() {
    setState(state - 1);
  }
  return (
    <>
      <input type="text" value={state} />
      <button onClick={Increment}>+</button>

      <button onClick={Decrement}>-</button>
    </>
  );
}

export default App;
