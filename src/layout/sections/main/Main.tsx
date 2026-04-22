import React from "react";
import photo from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          align={"start"}
          justify={"center"}
          wrap={"wrap"}
          gap={"75px"}
        >
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
  display: flex;
  border-bottom: 128px solid #181824;
  padding: 100px 0px 0px 0px;
  @media ${theme.media.mobile} {
    justify-content: center;
    padding: 0 0;
  }
`;

const TextBlock = styled.div`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 500px;
   @media ${theme.media.mobile} {
   margin-top: 65px;
  }
  
`;

const Greeting = styled.span`
  ${font({ weight: 400, Fmax: 32, Fmin: 24 })}
  @media ${theme.media.mobile} {
    
  }
`;

const Name = styled.h2`
  margin-top: 20px;
  ${font({ weight: 600, Fmax: 52, Fmin: 38 })}
    @media ${theme.media.mobile} {
   margin-top: 15px;
  }
`;

const MainText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.5;
`;
const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 35px;
  @media ${theme.media.mobile} {
    justify-content: center;
    gap: 10px;
    padding: 0px 10px ;
    margin-top: 25px;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  max-width: 500px;
  height: 444px;
  position: relative;
  left: 20px;
  margin-top: 17px;
  z-index: 0;
  clip-path: inset(0 -100% 0 -100%);

  @media ${theme.media.mobile} {
    width: 310px;
    height: 310px;
    left: 10px;
    clip-path: inset(0 -100% 0 -100%);
  }

  &::before {
    content: "";
    width: 485px;
    height: 485px;
    background-color: #7572e1;
    border-radius: 50%;
    position: absolute;
    top: 73%;
    left: 47%;
    transform: translate(-50%, -51%);
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 310px;
      height: 310px;
    }
  }
`;

const Photo = styled.img`
  max-width: 100%;
  height: 444px;
  object-fit: cover;
  display: block;
  @media ${theme.media.mobile} {
    width: 310px;
    height: 310px;
  }
`;
