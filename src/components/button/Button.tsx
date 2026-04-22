import React from "react";
import styled  from "styled-components";
import { theme } from "../../styles/Theme";
type ButtonPropsType = {
  title: string;
  link?: string;
  type?: "submit" | "reset";
  variant?: "primary" | "outline";
};
export const Button = (props: ButtonPropsType) => {
  return (
    <StyledBtn
      type={props.type || "button"}
      variant={props.variant || "primary"}
    >
      {props.title}
    </StyledBtn>
  );
};

const StyledBtn = styled.button<{
  variant: "primary" | "outline";
}>`
  width: 100%; 
  max-width: 170px;
  min-height: 50px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  
  cursor: pointer;

  border: 2px solid #7572e1;
  color: ${theme.colors.font};

  
  background-color: ${props => props.variant === "primary" ? "#7572e1" : "transparent"};

  &:hover {
    background-color: ${props => props.variant === "primary" ? "transparent" : "#7572e1"};
    color: ${props => props.variant === "primary" ? "#7572e1" : "white"};
  }
`;
