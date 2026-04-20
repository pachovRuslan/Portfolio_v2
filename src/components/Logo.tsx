import React from "react";
import myLogo from "../assets/images/Logo.svg"
import styled from "styled-components";


export const Logo = () => {
  return <StyledLogo src={myLogo} alt="Ruslan Pachkov" />
};

const StyledLogo = styled.img`
max-width: 240px;
  
`