import React from "react";
import styled from "styled-components";

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
  justify-content: space-between;
`;

const Order = ({ orders }) => {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          Found {orders.length} {orders.length > 1 ? "orders" : "order"}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout Here!</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};

export default Order;
