import React from "react";
import styled from "styled-components";
import foodAndDrinks from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { InlineTitle } from "../Styles/inlinetitle";

const MenuStyled = styled(InlineTitle)`
  margin: 0 400px 50px 20px;
  color: ${pizzaRed};
  height: 1000px;
`;

const Menu = () => {
  return (
    <MenuStyled>
      <h1>Audrey's House Favourites</h1>
      <FoodGrid>
        {foodAndDrinks.map(foodAndDrink => (
          <Food key={foodAndDrink.name} img={foodAndDrink.img}>
            <FoodLabel>{foodAndDrink.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  );
};

export default Menu;
