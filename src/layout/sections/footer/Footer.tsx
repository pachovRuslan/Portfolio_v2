import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { SocialList } from "../../../components/SocialList";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          padTop={"30px"}
          gap={"10px"}
        >
          <StyledSkillsList>
            <li>Fullstack Developer</li>
            <li>UI Designer</li>
            <li>Data Analyst</li>
          </StyledSkillsList>

          <MobileOnlySocial>
            <SocialList />
          </MobileOnlySocial>
          <Copyright>@2026 Ruslan Pachkov</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 35px 0;
`;

const StyledSkillsList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  padding: 0;

  @media (max-width: 567px) {
    flex-direction: column;
    align-items: center;
  }

  li {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    opacity: 50%;
  }
`;

const Copyright = styled.small`
padding-top: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  opacity: 50%;
`;
const MobileOnlySocial = styled.div`
  display: none;
  @media (max-width: 567px) {
    display: block;
  }
`;
