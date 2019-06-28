import React from "react";
import { createGlobalStyle } from "styled-components";
import { Banner } from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    padding:0;
    margin:0;
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
      <div>
        <h1>Welcome to Audrey's Pizza</h1>
      </div>
    </>
  );
}

export default App;
