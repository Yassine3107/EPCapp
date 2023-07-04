import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import YouTubeVideo from './Common/YoutubeVideo';
import PlumberImage from '../assets/epcvalues.png';

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
  ${marginY('10px')};
`;

const Span = styled.span`
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

function InformationEpc() {

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
          <Title id="epc">Een EPC attest of keuring in heel Vlaanderen</Title>
          <Paragraph>
            Een energieprestatiecertificaat is een certificaat waarmee je kan aflezen hoe energiezuinig een gebouw is.
            Het is verplicht bij verkoop of verhuur. Het EPC vertoont een energielabel, net zoals op elektrische
            toestellen, zoals koelkasten of wasmachines.
          </Paragraph>
          <Paragraph>
            Bovendien toont het EPC attest je meteen wat er goed en minder goed is aan de woning, zoals isolatie,
            hernieuwbare energie, ventilatie, en dergelijke.
          </Paragraph>
          <Paragraph>
            Het EPC toont ook aan welke aanpassingen nodig zijn om je woning een beter energielabel te bezorgen en zo
            energie te sparen. Het certificaat geeft ook een schatting van de kosten weer om tot een beter energielabel
            te komen! Bent u benieuwd naar het energielabel van jouw huis, laat een EPC opmaken door onze erkende
            energiedeskundigen.
          </Paragraph>
        </ParagraphContainer>
        <ImageContainer>
          <Image src={PlumberImage} />
        </ImageContainer>
      </InfoContainer>

      <InfoContainer>
        <ImageContainer>
            <YouTubeVideo videoId="Y9EyrqHLrZs" width="80" />
        </ImageContainer>
        <ButtonContainer>
          <Span>Wij staan open om al jouw vragen over het energieprestatiecertificaat (EPC) te beantwoorden!</Span>
          <Button onClick={ () => {handleBtnClick("https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-verkoop-of-verhuur-van-een-wooneenheid")}}>MEER INFORMATIE OVER HET EPC?</Button>
          <Button onClick={() => {handleBtnClick("https://apps.energiesparen.be/epc-wegwijzer-mei-2023 ")}} >HEBT U EEN EPC NODIG?</Button>
        </ButtonContainer>
      </InfoContainer>

    </Container>
  );
}

export default InformationEpc;
