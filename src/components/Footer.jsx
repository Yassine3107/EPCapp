import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  margin: 0 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const AdditionalInfo = styled.p`
  color: #777;
  margin: 0;
  font-size: 14px;

`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={logo} alt="Company Logo" />
        <ButtonContainer>
          <Button href="mailto:info@example.com">
            <ButtonIcon icon={faEnvelope} />
            Email
          </Button>
          <Button href="tel:+1234567890">
            <ButtonIcon icon={faPhone} />
            Bel Ons
          </Button>
        </ButtonContainer>
        <AdditionalInfo>
          EPC 24/7 | België | Antwerpen
        </AdditionalInfo>
        <AdditionalInfo>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </AdditionalInfo>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
