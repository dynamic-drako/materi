import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import "./App.css";
import CounterClass from "./components/CounterClass";

// Function compnent
function App() {
  const [number, setNumber] = useState(9999);
  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    if (number > 0) setNumber(number - 1);
  }
  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <Header char="Alpha" age={20} number={number} />
        {/* <Header char="Beta" />
          <Header char="Charlie" /> */}

        <Counter number={number} increase={increase} decrease={decrease} />
        <CounterClass number={number} increase={increase} decrease={decrease} />
      </div>
    </>
  );
}

export default App;
