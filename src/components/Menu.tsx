import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
type MenuPropsType = {
  title: string;
  href: string;
};

export const Menu = (props: { items: Array<MenuPropsType> }) => {
  return (
    <StyledMenu>
      <StyledMenuItem>
        {props.items.map((item, index) => {
          return (
            <StyledMenuLink key={index}>
              <a href={`${item.href}`}>{item.title}</a>
            </StyledMenuLink>
          );
        })}
      </StyledMenuItem>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  padding-right: 25px;
  @media ${theme.media.tablet} {
    display: none;
  }
`;
const StyledMenuItem = styled.ul`
  display: flex;
  gap: 52px;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;

  li:first-child a {
    color: #7572e1;
  }
`;
const StyledMenuLink = styled.li`
  a {
    color: white;
  }
  a:hover {
    color: #7572e1;
  }
`;
