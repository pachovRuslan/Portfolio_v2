import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styled";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};
export const Skill:React.FC<{ skillItems: Array<SkillPropsType> }> = (props: { skillItems: Array<SkillPropsType> }) => {
  return (
    <>
      {props.skillItems.map((item, index) => {
        return (
          <S.StyledSkill key={index}>
            <S.IconWrapper>
              <Icon
              iconId={item.iconId}
              width={"60px"}
              height={"60px"}
              viewBox={"0 0 30 30"}
              fill={"white"}
            />
            </S.IconWrapper>
            

            <S.SkillTitle>{item.title}</S.SkillTitle>
            <S.SkillText>{item.text}</S.SkillText>
          </S.StyledSkill>
        );
      })}
    </>
  );
};
