import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import {Link} from 'react-scroll'

const DesktopMenu = styled.nav`
  padding-right: 25px;
  ul{
  margin-left: 20px;
  white-space: nowrap;
  display: flex;
  gap: 52px;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  }

`
const MenuItem = styled.li`
 
`;
const NavLink = styled(Link)`
 :hover, &.active {
    color: ${theme.colors.accent};
  }
`
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
  top: -115px;
  right: -120px;
  width: 200px;
  height: 200px;
  z-index: 1000;
  background-color: transparent;
  a:hover {
    color: #7572e1;
  }
  span {
    display: block;
    width: 22px;
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
      width: 22px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-7px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 22px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(7px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 23px;
        `}
    }
  }
`;


const MobileMenu = styled.nav`
  ul {
  }
`;
export const S = {
  MenuItem,
  NavLink,
  MobileMenuPopup,
  MobileMenu,
  BurgerButton,
  DesktopMenu
};
