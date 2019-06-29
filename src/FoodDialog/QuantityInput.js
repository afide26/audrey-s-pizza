import React from "react";
import styled from "styled-components/macro";

const QuantityInputStyled = styled.input`
  width: 24px;
  border: 1px solid grey;
  outline: none;
  font-size: 1.8rem;
`;

const QuantityInput = ({ quantity }) => {
  return <QuantityInputStyled {...quantity} />;
};

export default QuantityInput;
