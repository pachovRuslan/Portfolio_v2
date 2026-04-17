import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>The services i offer:</SectionTitle>

        <FlexWrapper wrap={"wrap"} justify={"center"} gap={"25px"}>
          <Skill
            iconId={"js"}
            title={"JavaScript"}
            text={"JavaScript JavaScriptJavaScript JavaScriptJavaScript"}
          />
          <Skill
            iconId={"react"}
            title={"react"}
            text={
              "react react reactreact react react react react react react reactreact"
            }
          />
          <Skill
            iconId={"html"}
            title={"HTML"}
            text={"HTML HTMLHTMLHTML v HTMLHTMLHTML HTML HTMLHTMLHTMLHTML"}
          />
          <Skill
            iconId={"css"}
            title={"CSS"}
            text={
              "CSS CSSv vCSS CSSCSSCSS CSS CSSCSS CSS CSS CSS CSSCSSCSS CSSCSSCSSCSS CSSCSSCSS"
            }
          />
          <Skill
            iconId={"s-c"}
            title={"Styled-components"}
            text={
              "Styled-components Styled-components Styled-compone ntsStyled-components Styled-components Styled-components Styled-components"
            }
          />
          <Skill
            iconId={"redux"}
            title={"Redux"}
            text={
              "Redux ReduxRedux v vReduxRedux ReduxRedux Redux Redux ReduxRed uxRedux"
            }
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 70vh;
`;
