import styled from "styled-components";
import { InlineTitle } from "../Styles/inlinetitle";

export const FoodGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const Food = styled(InlineTitle)`
  box-shadow: 0px 0px 2px 0px grey;
  height: 150px;
  padding: 10px;
  border-radius: 7px;
  font-size: 25px;
  background: ${({ img }) => `url('${img}');`};
  background-size: cover;
  background-position: center;
  filter: contast(75%);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const FoodLabel = styled.div`
  position: absolute;
  padding: 5px;
  background-color: rgba(244, 67, 54, 0.7);
  letter-spacing: 2px;
  border-radius: 5px;
`;
