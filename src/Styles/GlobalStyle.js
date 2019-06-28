import {
  createGlobalStyle
} from "styled-components";

export const GlobalStyle = createGlobalStyle `
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