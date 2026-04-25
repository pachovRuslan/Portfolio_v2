import React from 'react';
import styled from 'styled-components';
import { Icon } from './icon/Icon';
const socialData = [
  { iconId: "facebook", href: "https://www.facebook.com/ruslan.pachkov" },
  { iconId: "github",   href: "https://github.com/pachovRuslan" },
  { iconId: "telegram", href: "https://t.me/ruslan_1613" },
  { iconId: "linkedin", href: "https://www.linkedin.com/in/ruslan-pachkou-08953615a/" },
];
export const SocialList:React.FC = () => {
    return (
                <SocialItems>
      {socialData.map((item) => (
        <SocialItem key={item.iconId}>
          <SocialLink 
            href={item.href} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`Follow us on ${item.iconId}`} 
          >
            <Icon
              iconId={item.iconId}
              viewBox="0 0 24 24"
              fill="#7562E0"
            />
          </SocialLink>
        </SocialItem>
      ))}
    </SocialItems>
    );
};
const SocialItems = styled.ul`
  display: flex;
  margin: 15px 0;
  list-style: none; 
  padding: 0;
`;

const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 18px; 
  }
`;

const SocialLink = styled.a`
  display: flex; 
  text-decoration: none;

  svg {
    cursor: pointer;
    transition: 0.3s;
    width: 30px;
    height: 30px;

    &:hover {
      transform: translateY(-3px);
      
    }
  }
`;

