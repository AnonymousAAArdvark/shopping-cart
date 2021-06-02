import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import CartPage from "./components/Cart/CartPage";
import ShopPage from "./components/Shop/ShopPage";
import ShopItemPage from "./components/Shop/ShopItemPage";

const Routes = ({ shoppingCart, addToCart, removeFromCart }) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/shop/:id"
          render={(routeProps) => (
            <ShopItemPage
              itemId={routeProps.match.params.id}
              addToCart={addToCart}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={() => (
            <CartPage
              shoppingCart={shoppingCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;