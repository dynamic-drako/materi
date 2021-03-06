import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <Header />
      <h1>Header</h1>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
