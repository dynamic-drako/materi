// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component
// import Header from "./components/Header";
// import Counter from "./components/Counter";
// import CounterClass from "./components/CounterClass";
// import Biodata from "./components/Biodata";
// import Forms from "./components/Forms";
import Navbar from "./components/Navbar";

// page
import Profile from "./pages/Profile";

import "./App.css";
// Function compnent
function App() {
  // const [number, setNumber] = useState(9999);
  // const [name, setName] = useState("Thoriq");
  // function increase() {
  //   setNumber(number + 1);
  // }

  // function decrease() {
  //   if (number > 0) setNumber(number - 1);
  // }

  // const changeName = () => {
  //   setName("impact byte");
  // };
  return (
    <Router>
      <div style={{ paddingLeft: "20px" }}>
        {/* <Header char="Alpha" age={20} number={number} />
        <Counter number={number} increase={increase} decrease={decrease} />
        <CounterClass number={number} increase={increase} decrease={decrease} />
        <Biodata name={name} changeName={changeName} />
        <Forms /> */}
        <Navbar />
        <h1>React Routing</h1>

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
