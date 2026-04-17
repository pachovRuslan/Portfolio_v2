import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper justify={"space-between"} align-items={"flex-start"}>
          <StyledSocialBlock>
            <SectionTitle>Connect with me:</SectionTitle>
            <StyledText>Satisfied with me? Please contact me</StyledText>
            <StyledIconBlock>
              <Icon iconId={"facebook"} viewBox="0 0 24 24" fill="#7562E0" />
              <Icon iconId={"github"} viewBox="0 0 24 24" fill="#7562E0" />
              <Icon iconId={"telegram"} viewBox="0 0 24 24" fill="#7562E0" />
              <Icon iconId={"linkedin"} viewBox="0 0 24 24" fill="#7562E0" />
            </StyledIconBlock>
          </StyledSocialBlock>

          <StyledMailBlock>
            <TitleForm>Contact me, let’s make magic together</TitleForm>
            <StyledInput placeholder={"Name:"} />
            <StyledInput placeholder={"Email:"} />
            <StyledInput placeholder={"Message:"} as={"textarea"} />
            <ButtonWrapper>
              <Button title="Send" type="submit" variant="primary" />
            </ButtonWrapper>
          </StyledMailBlock>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding: 100px 0;
`;

const StyledSocialBlock = styled.div`
  max-width: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const StyledMailBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  width: 100%;
`;
const TitleForm = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: #2e2e3e;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 15px;
  color: #ffffff;
  font-family: inherit;
  font-size: 16px;

  &::placeholder {
    color: #8d8d9d;
  }

  &:focus {
    outline: none;
    border: 1px solid #7572e1;
  }

  &[as="textarea"] {
    resize: none;
    height: 150px;
  }
`;

const StyledText = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin: 25px 0 35px;
`;

const StyledIconBlock = styled.div`
  display: flex;
  gap: 20px;

  svg {
    cursor: pointer;
    transition: 0.3s;

    width: 30px;
    height: 30px;

    &:hover {
      transform: translateY(-3px);
      color: #ffffff;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
