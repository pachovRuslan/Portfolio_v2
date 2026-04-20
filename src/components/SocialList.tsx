import React from 'react';
import styled from 'styled-components';
import { Icon } from './icon/Icon';

export const SocialList = () => {
    return (
                   <SocialItems>
                     <Socialitem>
                       <SocialLink>
                         <Icon
                           iconId={"facebook"}
                           viewBox="0 0 24 24"
                           fill="#7562E0"
                         />
                       </SocialLink>
                       <SocialLink>
                         <Icon iconId={"github"} viewBox="0 0 24 24" fill="#7562E0" />
                       </SocialLink>
                       <SocialLink>
                         <Icon
                           iconId={"telegram"}
                           viewBox="0 0 24 24"
                           fill="#7562E0"
                         />
                       </SocialLink>
                       <SocialLink>
                         <Icon
                           iconId={"linkedin"}
                           viewBox="0 0 24 24"
                           fill="#7562E0"
                         />
                       </SocialLink>
                     </Socialitem>
                   </SocialItems>
    );
};
const SocialItems = styled.ul`
  display: flex;
  margin: 15px 0;

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
const Socialitem = styled.li`
`;
const SocialLink = styled.a`
margin-right: 15px;
`;


