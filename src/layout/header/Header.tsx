import React from "react";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Header_Styles";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        <h1> Frontend Developer</h1>
        <FlexWrapper justify={"space-between"}>
          <Logo />
          {width > breakpoint ? (
            <DesktopMenu  />
          ) : (
            <MobileMenu  />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
