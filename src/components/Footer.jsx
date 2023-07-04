import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: auto; /* Add this line */
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

const LinkNav = styled(Link)`
  color: #333;
  text-decoration: underline;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <MainContent>
        {/* Place your main content here */}
      </MainContent>
      <FooterContainer>
        <FooterContent>
          <Logo src={logo} alt="Company Logo" />
          {/* <ButtonContainer>
            <Button href="mailto:info@example.com">
              <ButtonIcon icon={faEnvelope} />
              Email
            </Button>
            <Button href="tel:+1234567890">
              <ButtonIcon icon={faPhone} />
              Bel Ons
            </Button>
          </ButtonContainer> */}
          <AdditionalInfo>
            EPC 24/7 | België | Antwerpen
          </AdditionalInfo>
          <AdditionalInfo>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </AdditionalInfo>
          <AdditionalInfo>
            <LinkNav to="/terms">Terms of Service</LinkNav> |
            <LinkNav to="/policy">Privacy Policy</LinkNav> |
            <LinkNav to="/faq">FAQ</LinkNav>
          </AdditionalInfo>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
