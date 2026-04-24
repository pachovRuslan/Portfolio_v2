import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 35px 0;
`;

const SkillsList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  padding: 0;

  @media (max-width: 567px) {
    flex-direction: column;
    align-items: center;
  }

  li {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    opacity: 50%;
  }
`;

const Copyright = styled.small`
  padding-top: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  opacity: 50%;
`;
const MobileOnlySocial = styled.div`
  display: none;
  @media (max-width: 567px) {
    display: block;
  }
`;
export const S = {
  Footer,
  SkillsList,
  Copyright,
  MobileOnlySocial,
};
