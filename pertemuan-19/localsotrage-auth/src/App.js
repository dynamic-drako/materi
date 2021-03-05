import './App.css';

import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';

import Nav from "./components/Nav";
import ListProduct from './components/ListProduct';

function App() {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("isLogin")));

  return (
    <div className="App">
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          {isLogin ? <ListProduct /> : <Redirect to="/login" />}
          {/* condition  ? true : false */}
        </Route>
        <Route path="/login">
          <Login setIsLogin={setIsLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
