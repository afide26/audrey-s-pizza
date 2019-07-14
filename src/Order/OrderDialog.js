import React from "react";
import {
  Dialog,
  DialogContent,
  DialogShadow,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";

const OrderDialog = ({ openOrderDialog, setOpenOrderDialog, setOrders }) => {
  return openOrderDialog ? (
    <>
      <DialogShadow>
        <Dialog>
          <DialogContent>
            <h2>
              <span role="img" aria-label="truck">
                🚚
              </span>
              Your order is on the way
            </h2>
            <p>Please check your email for your order confirmation</p>
            <p>Thanks for choosing Audrey's Pizza</p>
          </DialogContent>
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
        </Dialog>
      </DialogShadow>
    </>
  ) : (
    <div />
  );
};

export default OrderDialog;
