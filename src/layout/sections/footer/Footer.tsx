import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { SocialList } from "../../../components/SocialList";
import { S } from "./Footer_Styled";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper
          direction={"column"}
          align={"center"}
          padTop={"30px"}
          gap={"10px"}
        >
          <S.SkillsList>
            <li>Fullstack Developer</li>
            <li>UI Designer</li>
            <li>Data Analyst</li>
          </S.SkillsList>

          <S.MobileOnlySocial>
            <SocialList />
          </S.MobileOnlySocial>
          <S.Copyright>@2026 Ruslan Pachkov</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
