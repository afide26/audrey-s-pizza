import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import Order from "./Order/Order";
// Hooks
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useAuthentication } from "./Hooks/useAuthentication";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });
  return (
    <>
      <GlobalStyle />
      <Navbar {...auth} />
      <FoodDialog {...openFood} {...orders} />
      <Order {...auth} {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
