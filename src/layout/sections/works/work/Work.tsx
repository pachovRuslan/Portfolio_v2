import React from "react";
import { Button } from "../../../../components/button/Button";
import { S } from "../Works_Styled";

type WorksItemsPropsType = {
  title: string;
  text: string;
  img: string;
  linkDemo: string;
  linkRepo: string;
};

export const Work: React.FC<{
  workItems: Array<WorksItemsPropsType>;
}> = (props: { workItems: Array<WorksItemsPropsType> }) => {
  return (
    <>
      {props.workItems.map((item, index) => {
        return (
          <S.StyledWork key={index}>
            <S.Image src={item.img} alt={item.title} />
            <S.Title>{item.title}</S.Title>
            <S.Text>{item.text}</S.Text>
            <S.ButtonsWrapper>
              <Button
                title="View Live"
                link={item.linkDemo}
                variant={"primary"}
                width="145px"
              />
              <Button
                title="Github Repo"
                link={item.linkRepo}
                variant={"outline"}
                width="145px"
              />
            </S.ButtonsWrapper>
          </S.StyledWork>
        );
      })}
    </>
  );
};
