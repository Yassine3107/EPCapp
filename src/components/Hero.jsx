import React from 'react'
import styled, { css } from 'styled-components'
import PlumberImage from '../assets/epccheck.png'


const marginX = (value) => css`
    margin-left: ${value};
    margin-right: ${value};
`;

const paddingY = (value) => css`
    padding-top: ${value};
    padding-bottom: ${value};
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 90%;
    ${marginX('auto')};
    margin-top: 40px;
    margin-bottom: 80px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    ${marginX('auto')};
    align-content: center;
    align-items: center;
`;

const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;    
`;

const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 0px;
    
    @media (max-width: 1200px) {
        font-size: 2rem; /* Adjust the font size for smaller screens */
        text-align: center;
    }

    @media (max-width: 1100px) {
        font-size: 1.5rem;
    }

    
`;

const TitleHighlight = styled.span`
   color: #0071F2;
`;

const SubTitle = styled.h5`
    color: grey;

    @media (max-width: 1200px) {
        font-size: .85rem;
        text-align: center;
    }

    @media (max-width: 1100px) {
        font-size: .80rem;
    }

    @media (min-width: 1000px) {
        width: 60%;
    }
`;

const Button = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    border: none;
    min-width: 90px;
    ${paddingY('10px')};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    &:hover{
        cursor: pointer;
    }

    @media (max-width: 1100px) {
        min-width: 70px;
        max-width: 50%;
        text-align: center;
    }
`;

const HeroImage = styled.img`
    max-width: 60%;
    @media (max-width: 1100px) {
        max-width: 70%;
    }
`;



function Hero() {
    
  return (
    <Container>
        <ContainerText>
            <Title id="home">Betrouwbaar en snel <br></br> een <TitleHighlight>EPC-attest</TitleHighlight> of <TitleHighlight>asbestkeuring</TitleHighlight></Title>
            <SubTitle>Wij bieden snelle en betrouwbare EPC-attesten en asbestinventarissen aan tegen competitieve en scherpe prijzen, volledig in overeenstemming met de meest recente richtlijnen van de Vlaamse Overheid. De attesten en keuringen die we leveren proberen we zo snel mogelijk uit te voeren, zodat u uw benodigde attesten op tijd hebt! We hebben een luisterend oor voor onze klanten en nemen uw woorden ten harte.</SubTitle>
            <Button><a href="#contact" style={{color: 'black'}}>Contacteer ons</a></Button>
        </ContainerText>
        <ContainerImage>
            <HeroImage src={PlumberImage}></HeroImage>
        </ContainerImage>

    </Container>
  )
}

export default Hero