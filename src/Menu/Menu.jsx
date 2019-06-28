import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { pizzaRed } from "../Styles/colors";

const MenuStyled = styled.div`
  margin: 0 400px 50px 20px;
  color: ${pizzaRed};
  height: 1000px;
`;

const StyledGreeting = styled.h1`
  color: ${pizzaRed};
  font-size: 3rem;
  font-family: "Kaushan Script", cursive;
`;

const StyledCategory = styled.h2`
  color: #86bc25;
  font-size: 2rem;
  font-family: "Kaushan Script", cursive;
`;

const Menu = () => {
  return (
    <MenuStyled>
      <StyledGreeting>Audrey's House Favourites</StyledGreeting>
      {Object.entries(foods).map(([category, foods]) => (
        <>
          <StyledCategory>{category}</StyledCategory>
          <FoodGrid key={foods}>
            {foods.map(foodAndDrink => (
              <Food key={foodAndDrink.name} img={foodAndDrink.img}>
                <FoodLabel>{foodAndDrink.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};

export default Menu;
