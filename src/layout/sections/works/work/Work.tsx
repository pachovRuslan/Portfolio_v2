import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper"; // Импортируем твой флекс-враппер

type WorkPropsType = {
  title: string;
  text: string;
  scr: string;
  linkDemo: string;
  linkRepo: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.scr} />
      {/* Оборачиваем текстовый контент, если нужно дополнительное выравнивание */}
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      
      {/* Ключевой момент: ставим кнопки в ряд с помощью FlexWrapper */}
      <FlexWrapper gap={"20px"}>
        <Button title="View Live" link={props.linkDemo} variant={"primary"} />
        <Button title="Github Repo" link={props.linkRepo} variant={"outline"} />
      </FlexWrapper>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 340px; 
  flex-grow: 1;
  background-color: #31313F;
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