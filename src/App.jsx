import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [add, setAdd] = useState(1);

  const addValue = () => {
    if (add < 20) {
      setAdd(add + 1);
    }
  };
  const removeValue = () => {
    if (add > 0) {
      setAdd(add - 1);
    }
  };

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter Value: {add}</h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
