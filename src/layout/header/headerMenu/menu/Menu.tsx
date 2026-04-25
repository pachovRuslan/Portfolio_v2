import React from 'react';
import { S } from '../HeaderMenu_Styles';
type MenuPropsType = {
  onNavLinkClick?: () => void
}
const items = [
  { title: "Home", href: "home" },
  { title: "About me", href: "about_me" },
  {title: "Skills", href:"skills"},
  { title: "Projects", href: "works" },
  { title: "Contact", href: "contacts" },
  
];

export const Menu: React.FC<MenuPropsType> = ({ onNavLinkClick }) => {
    return (
        <ul>
        {items.map((item, index) => {
          return (
            <S.MenuItem key={index}>
              <S.NavLink to={item.href}  onClick={onNavLinkClick} activeClass="active" spy={true} smooth={true} duration={300} offset={-100}>{item.title}</S.NavLink>
            </S.MenuItem>
          );
        })}
      </ul>
    );
};



