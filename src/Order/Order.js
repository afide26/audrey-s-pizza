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

const database = window.firebase.database();

const OrderStyled = styled.div`
  height: calc(100vh - 10px) !important;
  width: 340px !important;
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
  ${({ editable }) =>
    editable
      ? `
    cursor:pointer;
    
    &:hover{
      background-color:#e7e7e7;
    }`
      : `pointer-events:none;`}
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

function sendOrder(orders, { email, displayName }) {
  const newOrderRef = database.ref("orders").push();
  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        //undefined value
        return acc;
      }

      if (orderKey === "toppings") {
        return {
          ...acc,
          [orderKey]: order[orderKey]
            .filter(({ checked }) => checked)
            .map(({ name }) => name)
        };
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      };
    }, {});
  });
  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  });
}
const Order = ({
  orders,
  setOrders,
  setOpenFood,
  login,
  loggedIn,
  setOpenOrderDialog
}) => {
  const subTotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const VAT = subTotal * 0.1;
  const total = subTotal + VAT;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>
          <h3 style={{ fontFamily: "'Kaushan Script', cursive" }}>
            Choose from one of Audrey's House Favorites
          </h3>
        </OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>
            Found {orders.length} {orders.length > 1 ? "orders" : "order"}
          </OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer key={index} editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div>{formatPrice(getPrice(order))}</div>
                <div
                  style={{ cursor: "pointer", marginLeft: "30px" }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  <span role="img" aria-label="delete">
                    🗑️
                  </span>
                </div>
              </OrderItem>
              <DetailItem>
                {order.toppings &&
                  order.toppings
                    .filter(t => t.checked)
                    .map(topping => topping.name)
                    .join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Subtotal:</div>
              <div>{formatPrice(subTotal)}</div>
              <div />
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div />
              <div>VAT:</div>
              <div>{formatPrice(VAT)}</div>
              <div />
            </OrderItem>
          </OrderContainer>
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Total:</div>
              <div>{formatPrice(total)}</div>
              <div />
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}

      {orders.length > 0 && (
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              if (loggedIn) {
                sendOrder(orders, loggedIn);
                setOpenOrderDialog(true);
              } else {
                login();
              }
            }}
          >
            Checkout Here!
          </ConfirmButton>
        </DialogFooter>
      )}
    </OrderStyled>
  );
};

export default Order;
