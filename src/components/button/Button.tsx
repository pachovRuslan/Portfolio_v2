import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

type ButtonPropsType = {
  title: string;
  link?: string;
  width?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  onClick?: () => void;
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { title, link, width, type = "button", variant = "primary", onClick } = props;

  const btn = (
    <StyledBtn width={width} type={type} variant={variant} onClick={onClick}>
      {title}
    </StyledBtn>
  );


  if (link) {
    return (
      <Link to={link} smooth={true} duration={500} offset={-80}>
        {btn}
      </Link>
    );
  }

  return btn;
};
const StyledBtn = styled.button<{
  variant: "primary" | "outline";
  width?: string;
}>`
  width: ${(props) => props.width || "160px"};
  min-height: 50px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  cursor: pointer;

  border: 2px solid #7572e1;
  color: ${theme.colors.font};

  background-color: ${(props) =>
    props.variant === "primary" ? "#7572e1" : "transparent"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "transparent" : "#7572e1"};
    color: ${(props) => (props.variant === "primary" ? "#7572e1" : "white")};
  }
`;
