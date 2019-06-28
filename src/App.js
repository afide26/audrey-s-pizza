import React from "react";
import { createGlobalStyle } from "styled-components";
import { Banner } from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    padding:0;
    margin:0;
    font-size:10px;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
