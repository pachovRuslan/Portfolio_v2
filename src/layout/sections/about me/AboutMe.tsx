import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const skillsData = [
  { title: "UI & UX DESIGNING", iconId: "design", active: true },
  { title: "WEB DEVELOPMENT", iconId: "code", active: false },
  { title: "MOBILE DEVELOPMENT", iconId: "mobile", active: false },
  { title: "WEB SCRAPING WITH PYTHON", iconId: "python", active: false },
];
export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About me:</SectionTitle>
        <AboutText>
          Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer,
          UI designer, and Mobile developer. I have honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skills i have.
        </AboutText>

        <ExperienceBlock>
          <BigNumber>5+</BigNumber>
          <ExperienceText>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </ExperienceText>
        </ExperienceBlock>

        <FlexWrapper justify="center" wrap="wrap" gap="17px">
          {skillsData.map((s, index) => (
            <SkillCard key={index} active={s.active}>
              <IconPlaceholder />
              <SkillTitle>{s.title}</SkillTitle>
            </SkillCard>
          ))}
        </FlexWrapper>
      </Container>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  padding: 55px 0;
`;

const AboutText = styled.p`
  font-weight: 500;

  font-size: 18px;

  line-height: 32px;
  letter-spacing: 0%;

  margin: 10px 0px 19px 14px;
  max-width: 850px;
`;

const ExperienceBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin: 0px 0px 42px 7px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BigNumber = styled.span`
  font-size: 96px;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 1;
`;

const ExperienceText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const SkillCard = styled.div<{ active?: boolean }>`
  width: 255px;
  height: 255px;
  background-color: ${(props) => (props.active ? "#7572e1" : "#c4c4c4")};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  

  @media ${theme.media.mobile} {
    width: 100%;
    height: 200px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
  text-transform: uppercase;
`;


const IconPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: auto;
`;
