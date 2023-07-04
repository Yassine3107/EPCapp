import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import YouTubeVideo from './Common/YoutubeVideo';
import PlumberImage from '../assets/asbest.jpg';


const marginX = (value) => css`
  margin-left: ${value};
  margin-right: ${value};
`;

const marginY = (value) => css`
  margin-top: ${value};
  margin-bottom: ${value};
`;

const paddingY = (value) => css`
  padding-top: ${value};
  padding-bottom: ${value};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 80%;
  ${marginX('auto')};
  margin-top: 40px;
  margin-bottom: 70px;

  @media (max-width: 800px) {
    width: 95%;
    text-align: center;
    margin-top: 10px;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  ${marginX('auto')};
  margin-top: 40px;
  margin-bottom: 70px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 20px;

  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 150px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 50px;

  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 50px;

  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 35px;
`;

const Paragraph = styled.h5`
  color: grey;

  @media (max-width: 800px) {
    font-size: .95rem;
    text-align: center;
}

@media (max-width: 1100px) {
    font-size: .90rem;
}

  @media (min-width: 1000px) {
      width: 60%;
  }
  ${marginY('10px')};
`;

const Span = styled.h5`
  margin-bottom: 20px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: #0071f2;
  color: white;
  border-radius: 5px;
  border: none;
  min-width: 90px;
  width: 400px;
  ${paddingY('10px')};
  ${marginY('5px')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    min-width: 70px;
    width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  max-width: 80%;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

function InformationAsbest() {


  const handleBtnClick = (link) => {
    window.open(link, '_blank');
  }

  useEffect(() => {
    const scrollToElement = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = -150;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const scrollPosition = elementPosition + offset;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
      }
    };
  
    // Scroll to the element after a short delay to ensure the page has rendered
    setTimeout(scrollToElement, 100);
  }, []);
  
  
  return (
    <Container>
      <InfoContainer>
        <ParagraphContainer>
          <Title id="asbest">Het asbestattest of asbestinventarisatie (asbestkeuring)</Title>
          <Paragraph>
            Vanaf 23 november 2022 is het asbestattest verplicht bij de verkoop van gebouwen die voor het jaar 2001 zijn gebouwd. Tegen 2032 moet elke gebouweigenaar van een gebouw dat voor 2001 is gebouwd, beschikken over een asbestattest. 
          </Paragraph>
          <Paragraph>
            Het asbestattest is het resultaat nadat een asbestinventarisatie van een gebouw wordt uitgevoerd en toont aan of er asbesthoudende materialen aanwezig zijn of niet. 
          </Paragraph>
          <Paragraph>
            In 90% van de gebouwen met bouwjaar voor 2001 zit asbest in verwerkt. Dit kan gaan van vloertegels, golfplaten, dakleien, afvoergoten en leidingisolatie. Zo zijn er nog meer dan 3000 andere toepassingen waarvoor asbest in het verleden werd gebruikt. In totaal zit er meer dan 2 miljoen ton asbest verwerkt in de gebouwen en infrastructuur in Vlaanderen.
          </Paragraph>
        </ParagraphContainer>
        <ImageContainer>
          <Image src={PlumberImage} />
        </ImageContainer>
      </InfoContainer>

      <InfoContainer>
        <ImageContainer>
            <YouTubeVideo videoId="S8r1F8uLZhI" width="80" />
        </ImageContainer>
        <ButtonContainer>
          <Span>Wij staan open om al jouw vragen over het asbestattest te beantwoorden!</Span>
          <Button onClick={() => {handleBtnClick("https://ovam.vlaanderen.be/het-asbestattest")}}>MEER INFORMATIE OVER HET ASBESTATTEST?</Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
}

export default InformationAsbest;
