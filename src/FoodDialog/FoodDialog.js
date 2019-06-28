import React from "react";
import styled, { css } from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";

const Dialog = styled.div`
  position: fixed;
  background-color: white;
  width: 500px;
  top: 75px;
  z-index: 5;
  max-height: calc(100%-100px) !important;
  left: calc(50% - 250px) !important;
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  ${props =>
    props.children &&
    css`
      color: ${pizzaRed};
      font-size: 1rem;
      margin: 5px;
    `}
`;
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px #58585a;
  height: 60px;
`;

export const ConfirmButton = styled.button`
  background-color: ${pizzaRed};
  display: block;
  margin: 10px auto;
  width: 200px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: white;
  letter-spacing: 2px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
`;

const DialogShadow = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-size:cover;
  background-position: center;
`;

const DialogBannerName = styled(FoodLabel)`
  border-radius: 0;
  font-size: 2rem;
  color: white;
  padding: 0 1.5rem;
  font-family: "Kaushan Script", cursive;
  top: 90px;
`;

const FoodDialog = ({ openFood, setOpenFood, setOrders, orders }) => {
  function close() {
    setOpenFood();
  }
  if (!openFood) return null;

  const order = {
    name: openFood.name
  };
  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  return (
    openFood && (
      <>
        <DialogShadow onClick={close} />
        <Dialog onClick={close}>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>
          <DialogContent>{openFood.name}</DialogContent>
          <DialogFooter>
            <ConfirmButton onClick={addToOrder}>Confirm</ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    )
  );
};

export default FoodDialog;
