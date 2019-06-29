import React from "react";
import styled, { css } from "styled-components/macro";
import { FoodLabel } from "../Menu/FoodGrid";
import QuantityInput from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { useToppings } from "../Hooks/useToppings";
import { pizzaRed } from "../Styles/colors";
import { formatPrice } from "../Data/FoodData";
import Toppings from "./Toppings";

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
  padding: 20px;
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
  min-width: 200px;
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
  background: ${({ img }) => `
  url('${img}');
  `};

  background-size: cover;
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

const StyledSpan = styled.span`
  display: block;
  width: 25px;
  margin-left: auto;
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
  outline: none;
  padding: 0.3rem;
  text-align: center;
  background: ${pizzaRed};
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
}

function hasToppings(food) {
  return food.category === "Pizza";
}
const FoodDialogContainer = ({ openFood, setOpenFood, setOrders, orders }) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  function close(e) {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings
  };

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  return (
    openFood && (
      <>
        <DialogShadow onClick={close} />
        <Dialog>
          <DialogBanner img={openFood.img}>
            <StyledSpan onClick={close}>&times;</StyledSpan>
            <DialogBannerName> {openFood.name} </DialogBannerName>
          </DialogBanner>
          <DialogContent>
            <QuantityInput quantity={quantity} />
            {hasToppings(openFood) && (
              <>
                <h3>Choose additional toppings:</h3>
                <Toppings {...toppings} />
              </>
            )}
          </DialogContent>
          <DialogFooter>
            <ConfirmButton onClick={addToOrder}>
              Add to Order: {formatPrice(getPrice(order))}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </>
    )
  );
};

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
