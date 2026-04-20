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
  min-width: 160px;
  min-height: 50px;
  max-width: fit-content;
  border-radius: 5px;

  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;

  cursor: pointer;
  transition: 0.3s all ease;
  border: 2px solid #7572e1;
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
