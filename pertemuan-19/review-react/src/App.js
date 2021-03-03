import './App.css';

import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import ListProduct from './components/ListProduct';

import Nav from "./components/Nav";
import Footer from './components/Footer';
import Routing from './components/Routing';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  console.log(isLogin);

  return (
    <div className="App">
      <Nav isLogin={isLogin} setIsLogin={setIsLogin}/>

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

      <Footer />
    </div>
  );
}

export default App;
