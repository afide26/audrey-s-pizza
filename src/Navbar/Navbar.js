import React from "react";
import styled from "styled-components/macro";
import { pizzaRed } from "../Styles/colors";
import { InlineTitle } from "../Styles/inlinetitle";

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const Logo = styled(InlineTitle)`
  font-size: 20px;
  letter-spacing: 2px;
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
