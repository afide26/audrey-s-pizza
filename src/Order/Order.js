import React from "react";
import styled, { css } from "styled-components/macro";
import { primaryGrey } from "../Styles/colors";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
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
  height: 85%;
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
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
  ${props =>
    props.children &&
    css`
      color: ${primaryGrey};
      text-align: left;
    `}
`;

const DetailItem = styled.div`
  color: #58585a;
  font-size: 10px;
  text-align: left;
`;
const Order = ({ orders }) => {
  const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const VAT = subTotal * 0.1;
  const total = subTotal + VAT;
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
              <OrderItem key={order.name}>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings && <p>Your extra toppings are:</p>}
                {order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(", ")}
              </DetailItem>
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Subtotal:</div>
              <div />
              <div>{formatPrice(subTotal)}</div>
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div />
              <div>VAT:</div>
              <div />
              <div>{formatPrice(VAT)}</div>
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Total:</div>
              <div />
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout Here!</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};

export default Order;
