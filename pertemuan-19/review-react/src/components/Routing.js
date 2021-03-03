import {Switch, Route, Redirect} from 'react-router-dom';

import Home from "../pages/Home";
import Login from '../pages/Login';
import ListProduct from './ListProduct';

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product">
        <ListProduct />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default Routing