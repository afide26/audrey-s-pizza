import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import OrderDialog from "./Order/OrderDialog";
import Order from "./Order/Order";
// Hooks
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useOrderDialog } from "./Hooks/useOrderDialog";
import { useTitle } from "./Hooks/useTitle";
import { useAuthentication } from "./Hooks/useAuthentication";

const database = window.firebase.database();
const refTest = database.ref("testObj").push();
refTest.set({
  hello: "world"
});

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const orderDialog = useOrderDialog();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders });
  return (
    <>
      <GlobalStyle />
      <OrderDialog {...OrderDialog} {...orders} />
      <Navbar {...auth} />
      <FoodDialog {...openFood} {...orders} />
      <Order {...auth} {...orders} {...openFood} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
