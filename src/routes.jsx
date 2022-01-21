import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Category from "./Pages/Category";
import RegisterAccount from "./Pages/RegisterAccount";
import Product from "./Pages/Product";
import CartShopping from "./Pages/CartShopping";
import ConfirmAccount from "./Pages/ConfirmAccount";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Book" component={Book} />
        <Route path="/RegisterAccount" component={RegisterAccount} />
        <Route path="/Product" component={Product} />
        <Route path="/Category" component={Category} />
        <Route path="/CartShopping" component={CartShopping} />
        <Route path="/ConfirmAccount" component={ConfirmAccount}/>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
