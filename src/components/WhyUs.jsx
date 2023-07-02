import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faComments, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Reason = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
    <Container>
      <Title>Waarom voor ons kiezen?</Title>
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
    </Container>
  );
};

export default WhyUs;
