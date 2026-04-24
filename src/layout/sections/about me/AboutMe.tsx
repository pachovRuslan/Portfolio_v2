import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./About_me_Styled";
import { Icon } from "../../../components/icon/Icon";

const skillsData = [
  { title: "UI & UX DESIGNING", iconId: "ui", active: true },
  { title: "WEB DEVELOPMENT",   iconId: "dev", active: true },
];
export const AboutMe: React.FC = () => {
  return (
    <S.AboutMe id={"about_me"}>
      <Container>
        <SectionTitle>About me:</SectionTitle>
        <S.AboutText>
          Hi, I'm Ruslan — a frontend developer based in the UK with a
          background in IT support and systems administration spanning over 10
          years. I studied programming in Belarus and have been working hands-on
          with technology ever since. In 2022 I started learning React and
          building real projects. Today I focus on creating clean, responsive
          web interfaces using React, TypeScript, and styled-components. I'm
          currently deepening my skills through professional courses and looking
          for my first frontend projects where I can bring real value.
        </S.AboutText>

        <S.ExperienceBlock>
          <S.BigNumber>10+</S.BigNumber>
          <S.ExperienceText>
            Years in IT. Focused on frontend development with React &
            TypeScript.
          </S.ExperienceText>
        </S.ExperienceBlock>

        <FlexWrapper justify="center" wrap="wrap" gap="17px">
          {skillsData.map((s, index) => (
            <S.SkillCard key={index} active={s.active}>
             <S.IconWrapper>
                           <Icon
                           iconId={s.iconId}
                           width={"80px"}
                           height={"80px"}
                           viewBox={"0 0 30 30"}
                           fill={"white"}
                         />
                         </S.IconWrapper>

              <S.SkillTitle>{s.title}</S.SkillTitle>
            </S.SkillCard>
          ))}
        </FlexWrapper>
      </Container>
    </S.AboutMe>
  );
};
