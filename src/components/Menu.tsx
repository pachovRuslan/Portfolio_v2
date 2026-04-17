import React from "react";
import styled from "styled-components";
type MenuPropsType ={
    title: string,
    href: string
}

export const Menu = (props: { items: Array<MenuPropsType> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <a href={`${item.href}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};
const StyledMenu = styled.nav`
    ul { list-style: none; display: flex; gap: 30px;  }
    a { color: white;  }
    a:hover{
        color: #7572e1
    }

    li:first-child a {
        color: #7572e1;
    }
`;
