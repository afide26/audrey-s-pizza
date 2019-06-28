import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
const Dialog = styled.div`
  position: fixed;
  background-color: white;
  width: 500px;
  height: 2000px;
  top: 75px;
  z-index: 5;
  max-height: calc(100%-100px) !important;
  left: calc(50% - 250px) !important;
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

const FoodDialog = ({ openFood, setOpenFood }) => {
  function close() {
    setOpenFood();
  }
  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog onClick={close}>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
      </Dialog>
    </>
  ) : null;
};

export default FoodDialog;
