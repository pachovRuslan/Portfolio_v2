import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const AboutMe = styled.section`
  padding: 80px 0;
    @media ${theme.media.mobile} {
     padding: 0 0;
   }
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


const IconWrapper = styled.div`
 width: 150px;
  height: 150px;
  margin-bottom: auto;
`;
export const S = {
  AboutMe,
  AboutText,
  ExperienceBlock,
  BigNumber,
  ExperienceText,
  SkillCard,
  SkillTitle,
  IconWrapper
};
