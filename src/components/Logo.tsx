import React from "react";
import myLogo from "../assets/images/Logo.svg"
import styled from "styled-components";
import { theme } from "../styles/Theme";


export const Logo = () => {
  return <StyledLogo src={myLogo} alt="Ruslan Pachkov" />
};

const StyledLogo = styled.img`
max-width: 240px;
margin: 5px 0px 0px 35px;
 @media ${theme.media.mobile}{
    margin-left: 0px;
  }
`