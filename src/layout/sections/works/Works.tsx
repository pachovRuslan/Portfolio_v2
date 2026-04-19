import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import curConv from "../../../assets/images/cc.webp";
import proj6in1 from "../../../assets/images/6in1.webp";
import weather from "../../../assets/images/weather.webp";
const workItems = [
  {
    title: "Currency Converter",
    linkRepo: "#",
    linkDemo: "#",
    text: "A landing page for a currency exchange service with real-time rates and dynamic calculations.",
    img: curConv,
  },
  {
    title: "Project 6 in 1",
    linkRepo: "#",
    linkDemo: "#",
    text: "A versatile application combining six different tools for daily productivity and task management.",
    img: proj6in1,
  },
  {
    title: "Weather App",
    linkRepo: "#",
    linkDemo: "#",
    text: "Detailed weather forecasts with location-based services and interactive UI elements.",
    img: weather,
  },
];
export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <StyledText>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </StyledText>
        <FlexWrapper justify={"center"} wrap={"wrap"} gap={"30px"}>
          <Work workItems={workItems} />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  padding: 100px 0 50px;
`;
const StyledText = styled.p`
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0%;
  padding-bottom: 35px;
`;
