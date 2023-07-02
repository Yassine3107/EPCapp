import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PhoneNumber from './PhoneNumber';
import Email from './Email';

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: 60px;
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactCard = styled.div`
  max-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  padding-bottom: 10px;
  border-radius: 5%;

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0071F2;
`;

const ContactPage = () => {
  return (
    <ContactPageContainer id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactCardContainer>
        <ContactCard>
          <ContactIcon icon={faPhone} />
          <h3>Telefonisch contact</h3>
          <p>
            Bel ons op <PhoneNumber number="1234567890" /> voor directe ondersteuning en advies. Ons team staat klaar om uw vragen te beantwoorden over energieprestatiecertificaten.
          </p>
        </ContactCard>
        <ContactCard>
          <ContactIcon icon={faEnvelope} />
          <h3>E-mailcontact</h3>
          <p>
            Voor schriftelijke communicatie, stuur een e-mail naar <Email email="info@example.com" />. Ons toegewijde team zal snel reageren op uw vragen over energieprestatiecertificaten.
          </p>
        </ContactCard>
      </ContactCardContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
