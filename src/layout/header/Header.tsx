import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/Logo";
const items = [
  { title: "Home", href: "https://google.by" },
  { title: "About me", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "https://google.by" }
];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <Logo/>
          <Menu items={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
background-color: #760000;
`;
