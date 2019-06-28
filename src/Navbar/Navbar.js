import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: #fff;
  text-shadow: 1px 1px 3px #58585a;
`;

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Audrey's Pizza{" "}
        <span role="img" aria-label="pizza">
          🍕🍕🍕
        </span>
      </Logo>
    </NavbarStyled>
  );
}
