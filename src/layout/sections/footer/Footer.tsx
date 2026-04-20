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
        <FlexWrapper direction={"column"} align={"center"}>
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
  padding: 40px 0;
`;

const StyledSkillsList = styled.ul`
  display: flex;

  gap: 30px;
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
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
  font-size: 12px;
  font-weight: 400;
  opacity: 50%;
`;
const MobileOnlySocial = styled.div`
  display: none;
  @media (max-width: 567px) {
    display: block;
  }
`;
