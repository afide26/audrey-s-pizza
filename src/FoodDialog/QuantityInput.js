import React from "react";
import styled from "styled-components/macro";
import { Title } from "../Styles/title";
import { pizzaRed } from "../Styles/colors";

const QuantityInputStyled = styled.input`
  width: 23px;
  outline: none;
  font-size: 12px;
  text-align: center;
`;

const QuantityButton = styled(Title)`
  width: 23px;
  color: ${pizzaRed};
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.2rem;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  background-color: #fff;
  ${({ disabled }) =>
    disabled &&
    `
    opacity:0.5;
    pointer-events:none;
  `}
  &:hover {
    background-color: #ffe3e3;
  }
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const QuantityInput = ({ quantity }) => {
  return (
    <QuantityContainer>
      <p>Quantity:</p>
      <QuantityButton
        disabled={quantity.value === 1}
        onClick={() => {
          quantity.setValue(quantity.value - 1);
        }}
      >
        &#45;
      </QuantityButton>
      <QuantityInputStyled {...quantity} />
      <QuantityButton
        onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}
      >
        &#43;
      </QuantityButton>
    </QuantityContainer>
  );
};

export default QuantityInput;
