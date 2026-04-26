import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const StyledContacts = styled.section`
padding : 250px 0;
min-height: 50vh;

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
export const S ={
    StyledContacts,
    StyledFlexWrapper,
    StyledSocialBlock,
    SocialListWrapper,
    StyledMailBlock,
    TitleForm,
    StyledInput,
    StyledText

}