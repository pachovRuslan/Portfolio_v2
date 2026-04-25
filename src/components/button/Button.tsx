import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

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


  if (link) {
    const isExternal = link.startsWith("http");

    return (
      <StyledBtn
        as="a" 
        href={link}
        width={width}
        variant={variant}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {title}
      </StyledBtn>
    );
  }


  return (
    <StyledBtn 
        width={width} 
        type={type} 
        variant={variant} 
        onClick={onClick}
    >
      {title}
    </StyledBtn>
  );
};

const StyledBtn = styled.button<{
  variant: "primary" | "outline";
  width?: string;
}>`
 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; 

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
    transition: .5s ease-in-out;
    background-color: ${(props) =>
    props.variant === "primary" ? "transparent" : "#7572e1"};
    color: ${(props) => (props.variant === "primary" ? "#7572e1" : "white")};
  }
`;