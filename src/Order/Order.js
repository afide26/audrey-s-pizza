import React from "react";
import styled, { css } from "styled-components";
import { primaryGrey } from "../Styles/colors";
import {
  DialogFooter,
  ConfirmButton,
  DialogContent
} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  height: calc(100vh - 10px) !important;
  width: 340px;
  top: 48px;
  box-shadow: 4px 0px 5px 4px #58585a;
  background-color: white;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

const OrderContent = styled(DialogContent)`
  height: 88%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${primaryGrey};
  width: 95%;
  margin: 0 auto;
  ${props =>
    props.children &&
    css`
      color: ${primaryGrey};
    `}
`;
const OrderItem = styled.div`
  padding: 10px 0;
  ${props =>
    props.children &&
    css`
      color: ${primaryGrey};
      text-align: left;
    `}
`;
const Order = ({ orders }) => {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>
            Found {orders.length} {orders.length > 1 ? "orders" : "order"}
          </OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>{order.name}</OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout Here!</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};

export default Order;
