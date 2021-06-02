import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (song) => {
    const songIdx = shoppingCart.findIndex((i) => i.id === song.id);
    if(songIdx > -1) {
      const newCart = shoppingCart.slice();
      newCart[songIdx].quantity++;

      setShoppingCart(newCart);
    }
    else {
      setShoppingCart([...shoppingCart, song]);
    }
  }

  const removeFromCart = (song, removeAll) => {
    const songIdx = shoppingCart.findIndex((i) => i.id === song.id);
    if(songIdx > -1) {
      const newCart = shoppingCart.slice();

      removeAll ? newCart.splice(songIdx, 1) : newCart[songIdx].quantity--;

      setShoppingCart(newCart);
    }
    else {
      console.error("Couldn't remove item from shopping cart: There's no such item in the shopping cart.");
    }
  }

  return (
    <Layout>
      <HashRouter basename="/">
        <NavBar cartSize={shoppingCart.reduce((total, item) => {return total + item.quantity;}, 0)} />
        <Main>
          <Routes
            shoppingCart={shoppingCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Main>
      </HashRouter>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default App;
