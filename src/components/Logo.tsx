import React from "react";
import myLogo from "../assets/images/Logo.svg"
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { animateScroll as scroll} from "react-scroll";

export const Logo:React.FC = () => {
  return <StyledLogo src={myLogo} alt="Ruslan Pachkov" onClick={()=>{scroll.scrollToTop()}} />
};

const StyledLogo = styled.img`
max-width: 240px;
margin: 5px 0px 0px 35px;
 @media ${theme.media.mobile}{
    margin-left: 0px;
  }
`