import React from "react";
import styled from "styled-components/macro";
import { pizzaRed } from "../Styles/colors";
import { InlineTitle } from "../Styles/inlinetitle";

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(InlineTitle)`
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 1px 1px 3px #58585a;
`;

const UserStatus = styled.div`
  margin-right: 30px;
  font-size: 14px;
  color: #fff;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;
const firstName = function(name) {
  const fullName = name.split(" ");
  return fullName[0];
};
export default function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarStyled>
      <Logo>
        Audrey's Pizza
        <span role="img" aria-label="pizza">
          🍕🍕🍕
        </span>
      </Logo>
      <UserStatus>
        {loggedIn === "loading" ? (
          "Loading..."
        ) : (
          <>
            <span
              style={{ cursor: "pointer", marginRight: "10px" }}
              aria-label="loggedIn"
              role="img"
              onClick={logout}
            >
              😋 {loggedIn ? `Hello ${firstName(loggedIn.displayName)}` : null}
            </span>
            {loggedIn ? (
              <LoginButton onClick={logout}>Log out</LoginButton>
            ) : (
              <LoginButton onClick={login}>Log in / Sign up</LoginButton>
            )}
          </>
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
