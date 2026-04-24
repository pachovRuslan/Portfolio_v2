import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const StyledSkills = styled.section`
  padding: 24px 0;
`;
const StyledSkill = styled.div`
  width: 341px;
  height: 341px;
  display: flex;
  flex-direction: column;

  border: 4px solid #7572e1;
  border-radius: 15px;
  align-items: center;
  text-align: center;

  &:nth-child(even) {
    border-color: #ffffff;
    h3 {
      color: #7572e1;
    }
  }
  @media ${theme.media.mobile} {
    width: 330px;
  }
`;

const SkillTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
`;

const SkillText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 10px;
  color: #ffffff;
  max-width: 280px;
  flex-grow: 1;
`;
const IconWrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: end;
`;
export const S = {
  StyledSkills,
  StyledSkill,
  SkillTitle,
  SkillText,
  IconWrapper,
};
