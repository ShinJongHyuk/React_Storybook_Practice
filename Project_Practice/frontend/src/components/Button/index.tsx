import React from "react";
import { StyledButton } from "./Button.styled";

const ButtonComponent = (props: any) => {
  return (
      <StyledButton {...props}>{props.label || "Button"}</StyledButton>
  );
};

export default ButtonComponent;
