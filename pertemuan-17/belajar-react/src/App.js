import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Biodata from "./components/Biodata";
import Forms from "./components/Forms";

import "./App.css";
// Function compnent
function App() {
  const [number, setNumber] = useState(9999);
  const [name, setName] = useState("Thoriq");
  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    if (number > 0) setNumber(number - 1);
  }

  const changeName = () => {
    setName("impact byte");
  };
  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <Header char="Alpha" age={20} number={number} />
        {/* <Header char="Beta" />
          <Header char="Charlie" /> */}

        <Counter number={number} increase={increase} decrease={decrease} />
        <CounterClass number={number} increase={increase} decrease={decrease} />
        <Biodata name={name} changeName={changeName} />
        <Forms />
      </div>
    </>
  );
}

export default App;
