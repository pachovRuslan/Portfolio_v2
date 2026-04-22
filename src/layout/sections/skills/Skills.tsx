import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
const skillItems = [
  {
    iconId: "js",
    title: "JavaScript",
    text: "Building robust logic and interactive user experiences using modern ES6+ features, ensuring high performance and clean, maintainable code.",
  },
  {
    iconId: "react",
    title: "React",
    text: "Developing dynamic, high-performance web applications using a component-based architecture, React Hooks, and efficient state management.",
  },
  {
    iconId: "html",
    title: "HTML",
    text: "Architecting the backbone of web projects with semantic markup, prioritizing SEO best practices and cross-browser compatibility.",
  },
  {
    iconId: "css",
    title: "CSS",
    text: "Bringing designs to life with pixel-perfect precision using Flexbox, Grid, and responsive techniques for a flawless look on any device.",
  },
  {
    iconId: "s-c",
    title: "Styled-components",
    text: "Utilizing a CSS-in-JS approach to build modular UI systems with scoped styles, making large-scale projects easier to maintain and theme.",
  },
  {
    iconId: "redux",
    title: "Redux",
    text: "Implementing predictable state management for complex applications, ensuring seamless data flow and easy debugging across the entire stack.",
  },
];
export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>The services i offer:</SectionTitle>

        <FlexWrapper wrap={"wrap"} justify={"center"} padTop={"30px"} gap={"16px 22px"}>
          <Skill skillItems={skillItems} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
padding: 24px 0;
`;
