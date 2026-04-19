import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";
type MenuPropsType = {
  title: string;
  href: string;
};

export const MobileMenu = (props: { items: Array<MenuPropsType> }) => {
  return (
    <StyledMenu>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <StyledMenuItem>
          {props.items.map((item, index) => {
            return (
              <StyledMenuLink key={index}>
                <a href={`${item.href}`}>{item.title}</a>
              </StyledMenuLink>
            );
          })}
        </StyledMenuItem>
      </MobileMenuPopup>
    </StyledMenu>
  );
};
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: none;
  background-color: #181824;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    li:first-child a {
      color: #7572e1;
    }
  }
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top:-110px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 1000;
  background-color: transparent;
  a:hover {
    color: #7572e1;
  }
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 30px;
        `}
    }
  }
`;
const StyledMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;
const StyledMenuItem = styled.ul``;
const StyledMenuLink = styled.li`
  a {
    color: white;
  }
  a:hover {
    color: #7572e1;
  }
`;
