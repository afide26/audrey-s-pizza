import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Welcome to Audrey's Pizza</h1>
      </div>
    </>
  );
}

export default App;
