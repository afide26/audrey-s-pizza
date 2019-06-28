import styled from "styled-components";
import {
  InlineTitle
} from "../Styles/inlinetitle";

export const FoodGrid = styled.div `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const Food = styled.div `
  box-shadow: 0px 0px 2px 0px grey;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  height: 150px;
  padding: 10px;
  border-radius: 7px;
  font-size: 25px;
  margin-top:5px;
  filter: contrast(75%);
  background: ${({ img }) => `
url('${img}');
`};
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0px 5px 10px 1px grey;
    margin-top:0px;
    margin-bottom:5px;
  }
`;

export const FoodLabel = styled(InlineTitle)
` top:0;
  left:0;
  border-top-left-radius:5px;
  position: absolute;
  padding: .25rem 1rem;
  background-color: rgba(244, 67, 54, 0.8);
  letter-spacing: 2px;
  text-transform:none;

  & > span{
    color:#fff;
    font-family:"Roboto", sans-serif;
    font-size:1.25rem;
    margin-left:25px;
  }
`;