// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Profile from "./pages/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <h1>Redux</h1>
        <Header />

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router> */}
      <Counter />
    </div>
  );
}

export default App;
