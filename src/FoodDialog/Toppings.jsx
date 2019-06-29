import React from "react";
import styled from "styled-components/macro";

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const ToppingCheckBox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
const CheckboxLabel = styled.label`
  ${props => props.children && `color:#58585a;`}
  cursor: pointer;
`;
const Toppings = ({ toppings, checkTopping }) => {
  return (
    <ToppingGrid>
      {toppings.map((topping, index) => (
        <CheckboxLabel key={index}>
          <ToppingCheckBox
            onChange={() => checkTopping(index)}
            type="checkbox"
            checked={topping.checked}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  );
};

export default Toppings;
