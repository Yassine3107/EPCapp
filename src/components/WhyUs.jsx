import React from 'react';
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faComments, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const marginX = (value) => css`
    margin-left: ${value};
    margin-right: ${value};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
`;

const ReasonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 80%;
  ${marginX('auto')};
  margin-top: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 20px;
    margin-bottom: 30px;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
      font-size: 2rem; /* Adjust the font size for smaller screens */
  }

  @media (max-width: 1100px) {
      font-size: 1.5rem;
  } 
`;

const Reason = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: column;
  text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  color: #0071F2;
`;

const Text = styled.p`
  margin: 0;
`;

const WhyUs = () => {
  return (
    <Container id="whyus">
      <Title>Waarom voor ons kiezen?</Title>
      <ReasonContainer>
        <Reason>
          <Icon icon={faShieldHalved} />
          <div>
            <h3>Ervaring en expertise</h3>
            <Text>Met jarenlange ervaring en diepgaande kennis kunnen wij hoogwaardige diensten leveren. Ons team begrijpt en past de nieuwste richtlijnen en voorschriften van de Vlaamse Overheid volledig toe.</Text>
          </div>
        </Reason>
        <Reason>
          <Icon icon={faBoltLightning} />
          <div>
            <h3>Betrouwbare en snelle service</h3>
            <Text>Wij begrijpen dat tijd cruciaal is. Daarom streven we naar een betrouwbare en snelle service, zodat uw certificaat tijdig wordt geleverd.</Text>
          </div>
        </Reason>
        <Reason>
          <Icon icon={faComments} />
          <div>
            <h3>Klantgericht en persoonlijk</h3>
            <Text>Bij ons staat de klant centraal. We luisteren naar uw behoeften en bieden op maat gemaakte oplossingen. Ons vriendelijke team staat klaar om u te begeleiden en te ondersteunen.</Text>
          </div>
        </Reason>
      </ReasonContainer>
    </Container>
  );
};

export default WhyUs;
