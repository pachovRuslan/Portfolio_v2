import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { MobileMenu } from "../../components/MobileMenu";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = [
  { title: "Home", href: "https://google.by" },
  { title: "About me", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "https://google.by" },
];
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <h1> Frontend Developer</h1>
        <FlexWrapper justify={"space-between"} >
          <Logo />
          <Menu items={items} />
          <MobileMenu items={items} />
        </FlexWrapper>
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
  padding-top: 24px;

  h1 {
    display: none;
  }
`;

