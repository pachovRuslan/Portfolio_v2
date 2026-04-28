import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const StyledWorks = styled.section`
 min-height: 100vh;
 height: 100%;
   @media ${theme.media.mobile} {
     padding: 0 0;
   }
`;
const StyledText = styled.p`
  margin: 13px 5px 0px 14px;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0%;
`;
const StyledWork = styled.div`
  width: 340px;
  min-height: 415px;
  display: flex;
  flex-direction: column;
  background-color: #31313f;
  border-radius: 10px;
  padding: 15px;
  margin: 36px 0px 5px 0;
`;

const ButtonsWrapper = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 10px;                     
  width: 100%;
  margin-top: auto;
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

export const S = {
    StyledWorks,
    StyledText,
    StyledWork,
    ButtonsWrapper,
    Image,
    Title,
    Text
}