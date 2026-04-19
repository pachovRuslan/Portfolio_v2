import React from "react";
import styled from "styled-components";
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
const StyledMenu = styled.nav``;
const StyledMenuItem = styled.ul`
  display: flex;
  gap: 20px;
`;
const StyledMenuLink = styled.li`
  a {
    color: white;
  }
  a:hover {
    color: #7572e1;
  }
  first-child a {
    color: #7572e1;
  }
`;
