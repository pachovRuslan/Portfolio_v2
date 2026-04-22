import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { SocialList } from "../../../components/SocialList";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <StyledFlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          <StyledSocialBlock>
            <SectionTitle>Connect with me:</SectionTitle>
            <SocialListWrapper>
              <StyledText>Satisfied with me? Please contact me</StyledText>
              <SocialList />
            </SocialListWrapper>
          </StyledSocialBlock>

          <StyledMailBlock>
            <TitleForm>Contact me, let’s make magic together</TitleForm>
            <StyledInput placeholder={"Name:"} />
            <StyledInput placeholder={"Email:"} />
            <StyledInput placeholder={"Message:"} as={"textarea"} />

            <Button title="Send" type="submit" variant="primary" />
          </StyledMailBlock>
        </StyledFlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
padding: 72px 0;

`;
const StyledFlexWrapper = styled(FlexWrapper)`
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
const StyledSocialBlock = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;

`;
const SocialListWrapper = styled.div`
margin-left: 13px;
  @media ${theme.media.mobile} {
    display: none;
  }
`;
const StyledMailBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  width: 100%;
  margin-right: 56px;
  textarea {
    resize: none;
    height: 92px;
  }
    @media ${theme.media.tablet} {
    justify-content: center;
  }
   @media (max-width: 1000px) {
   margin: 0;
  }
`;
const TitleForm = styled.h3`
  font-size: 24px;
  font-weight: 500;
  
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: #2e2e3e;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 15px;
margin-top: 10px;
  font-family: inherit;
  font-size: 16px;

  &::placeholder {
    color: #8d8d9d;
  }

  &:focus {
    outline: none;
    border: 1px solid #7572e1;
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  margin: 17px 0px 26px;
`;
