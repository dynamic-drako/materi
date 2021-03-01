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
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import "./App.css";
// Function compnent
function App() {
  return (
    // <Router>
      <div style={{ paddingLeft: "20px" }}>

        <Navbar />
        <h1>React Routing</h1>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:name">
            <Profile />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    // </Router>
  );
}

export default App;

        {/* <Header char="Alpha" age={20} number={number} />
        <Counter number={number} increase={increase} decrease={decrease} />
        <CounterClass number={number} increase={increase} decrease={decrease} />
        <Biodata name={name} changeName={changeName} />
        <Forms /> */}