import React from "react";
import photo from "../../../assets/images/Photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper
          align={"start"}
          justify={"center"}
          wrap={"wrap"}
          gap={"75px"}
        >
          <S.TextBlock>
            <S.Greeting>Hello, i’m</S.Greeting>
            <S.Name>Ruslan Pachkov</S.Name>
            <S.MainText>
              Frontend Developer with 10+ years in IT. Specializing in React,
              TypeScript & modern CSS.
            </S.MainText>
            <S.ButtonWrapper>
              <Button title={"About me"} link={"about_me"} width="160px" />
              <Button
                variant="outline"
                title={"Projects"}
                link={"works"}
                width="160px"
              />
            </S.ButtonWrapper>
          </S.TextBlock>
          <S.PhotoWrapper>
            <S.Photo src={photo} />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
