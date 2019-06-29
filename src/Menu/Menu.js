import React from "react";
import styled from "styled-components/macro";
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { formatPrice } from "../Data/FoodData";

const MenuStyled = styled.div`
  margin: 0 400px 50px 20px;
  color: ${pizzaRed};
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

const Menu = ({ setOpenFood }) => {
  return (
    <MenuStyled>
      <StyledGreeting>Audrey's House Favourites</StyledGreeting>
      {Object.entries(foods).map(([category, foods], index) => (
        <React.Fragment key={index}>
          <StyledCategory>{category}</StyledCategory>
          <FoodGrid>
            {foods.map(food => (
              <Food
                key={food.name}
                onClick={() => setOpenFood(food)}
                img={food.img}
              >
                <FoodLabel>
                  {food.name}
                  <span aria-label="price">{formatPrice(food.price)}</span>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </React.Fragment>
      ))}
    </MenuStyled>
  );
};

export default Menu;
