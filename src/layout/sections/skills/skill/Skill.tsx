import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};
export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        width={"60px"}
        height={"60px"}
        viewBox={"0 0 30 30"}
        fill={"white"}
      />

      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.text}</SkillText>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 350px;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  padding: 45px 30px;
  border: 2px solid #7572e1;
  border-radius: 15px;
  background-color: #1a1a29;
  align-items: center;
  text-align: center;

  &:nth-child(even) {
    border-color: #ffffff;
    h3 {
      color: #7572e1;
    }
  }
`;



const SkillTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
`;

const SkillText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  max-width: 280px;
  flex-grow: 1;
`;
