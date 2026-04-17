import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

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

  li {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
`;
