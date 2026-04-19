import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper"; // Импортируем твой флекс-враппер

type WorksItemsPropsType = {
  title: string;
  text: string;
  img: string;
  linkDemo: string;
  linkRepo: string;
};

export const Work = (props: { workItems: Array<WorksItemsPropsType> }) => {
  return (
    <>
      {props.workItems.map((item, index) => {
        return (
          <StyledWork key={index}>
            <Image src={item.img} alt={item.title} />
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
            <FlexWrapper gap={"20px"}>
              <Button
                title="View Live"
                link={item.linkDemo}
                variant={"primary"}
              />
              <Button
                title="Github Repo"
                link={item.linkRepo}
                variant={"outline"}
              />
            </FlexWrapper>
          </StyledWork>
        );
      })}
    </>
  );
};

const StyledWork = styled.div`
  width: 340px;
  flex-grow: 1;
  background-color: #31313f;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border: 2px solid #7572e1;
  border-radius: 10px;
  width: 100%;
  height: 175px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: #7572e1;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
`;

const Text = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 20px;
  text-align: left;
`;
