import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
import { MobileMenu } from "../../components/MobileMenu";
import { theme } from "../../styles/Theme";
const items = [
  { title: "Home", href: "https://google.by" },
  { title: "About me", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "https://google.by" },
];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <h1> Frontend Developer</h1>
        <HeaderWrapper>
          <Logo />
          <Menu items={items} />
          <MobileMenu items={items} />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #181824;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 24px 3px 0 0;

  h1 {
    display: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
