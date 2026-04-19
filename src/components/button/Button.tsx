import React from "react";
import styled, { css } from "styled-components";
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
  buttonType?: string;
}>`
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s all ease;
  border: 1px solid #7572e1;
  color: white;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #7572e1;

      &:hover {
        background-color: transparent;
        color: #7572e1;
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;

      &:hover {
        background-color: #7572e1;
        color: white;
      }
    `}
`;
