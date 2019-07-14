import React from "react";
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";

import styled from "styled-components/macro";

const OrderDialogStyled = styled(Dialog)`
  background: white !important;
  text-align: center;
`;

const OrderDialogContent = styled(DialogContent)`
  background: white;
`;

const OrderDialog = ({
  openOrderDialog,
  setOpenFood,
  setOpenOrderDialog,
  setOrders
}) => {
  return openOrderDialog ? (
    <>
      <DialogShadow onClick={() => setOpenOrderDialog()} />
      <OrderDialogStyled>
        <OrderDialogContent>
          <h2>
            <span role="img" aria-label="truck">
              🚚
            </span>
            &nbsp;Your order is on the way
          </h2>
          <p>Please check your email for your order confirmation</p>
          <p>Thank you for choosing Audrey's Pizza</p>
        </OrderDialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            I'm still hungry!
          </ConfirmButton>
        </DialogFooter>
      </OrderDialogStyled>
    </>
  ) : (
    <div />
  );
};

export default OrderDialog;
