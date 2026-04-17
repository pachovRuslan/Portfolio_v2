import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Work } from './work/Work';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import curConv from '../../../assets/images/cc.webp';
import proj6in1 from '../../../assets/images/6in1.webp';
import weather from '../../../assets/images/weather.webp';

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Projects</SectionTitle>    
                 <StyledText>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</StyledText>          
                <FlexWrapper  justify={"center"} wrap={"wrap"} gap={"30px"}>
                    
                    <Work 
                        scr={curConv} 
                        title={'Currency Converter'} 
                        text={'A landing page for a currency exchange service with real-time rates and dynamic calculations.'} 
                        linkRepo={'#'} 
                        linkDemo={'#'} 
                    />

                    <Work 
                        scr={proj6in1} 
                        title={'6 in 1 React Projects'} 
                        text={'A collection of mini-applications including a counter, quiz, and modal windows to practice React hooks.'} 
                        linkRepo={'#'} 
                        linkDemo={'#'} 
                    />

                    <Work 
                        scr={weather} 
                        title={'Weather App'} 
                        text={'Weather forecast application using OpenWeatherMap API with location-based detection.'} 
                        linkRepo={'#'} 
                        linkDemo={'#'} 
                    />

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
padding-bottom:35px 
`;
