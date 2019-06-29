import React from "react";
import styled from "styled-components/macro";

const Choices = ({ openFood, choiceRadio }) => {
  const CursorPointer = `cursor:pointer`;
  const Label = styled.label`
    ${CursorPointer}
  `;
  const RadioInput = styled.input`
    ${CursorPointer}
  `;
  return (
    <>
      <h3>Choose One</h3>
      {openFood.choices.map((choice, i) => (
        <React.Fragment key={i}>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <Label style={{ margin: "0 5px" }} htmlFor={choice}>
            {choice}
          </Label>
        </React.Fragment>
      ))}
    </>
  );
};

export default Choices;
