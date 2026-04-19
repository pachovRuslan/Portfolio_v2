import React from "react";
import photo from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <TextBlock>
            <Greeting>Hello, i’m</Greeting>
            <Name>Ruslan Pachkov</Name>
            <MainText>
              Freelance UI designer, Fullstack developer, & Data Miner. I create
              seamless web experiences for end-users.
            </MainText>
            <ButtonWrapper>
              <Button title={"About me"} />
              <Button variant="outline" title={"Projects"} />
            </ButtonWrapper>
          </TextBlock>
          <PhotoWrapper>
            <Photo src={photo} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  max-width: 500px;
  width: 100%;
`;

const Greeting = styled.span`
  font-size: 32px;
  font-weight: 400;
`;

const Name = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin: 10px 0;
`;

const MainText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    width: 444px;
    height: 444px;
    background-color: #7572e1;
    border-radius: 50%;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 444px;
  height: 444px;
  object-fit: cover;
  display: block;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;
