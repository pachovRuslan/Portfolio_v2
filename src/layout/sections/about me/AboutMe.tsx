import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./About_me_Styled";

const skillsData = [
  { title: "UI & UX DESIGNING", iconId: "design", active: true },
  { title: "WEB DEVELOPMENT", iconId: "code", active: false },
  { title: "MOBILE DEVELOPMENT", iconId: "mobile", active: false },
  { title: "WEB SCRAPING WITH PYTHON", iconId: "python", active: false },
];
export const AboutMe:React.FC = () => {
  return (
    <S.AboutMe id={"about_me"}>
      <Container>
        <SectionTitle>About me:</SectionTitle>
        <S.AboutText>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I have honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skills i have.
        </S.AboutText>

        <S.ExperienceBlock>
          <S.BigNumber>5+</S.BigNumber>
          <S.ExperienceText>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </S.ExperienceText>
        </S.ExperienceBlock>

        <FlexWrapper justify="center" wrap="wrap" gap="17px">
          {skillsData.map((s, index) => (
            <S.SkillCard key={index} active={s.active}>
              <S.IconPlaceholder />
              <S.SkillTitle>{s.title}</S.SkillTitle>
            </S.SkillCard>
          ))}
        </FlexWrapper>
      </Container>
    </S.AboutMe>
  );
};


