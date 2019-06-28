import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Banner } from "./Banner/Banner";
import FoodDialog from "./FoodDialog/FoodDialog";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
