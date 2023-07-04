import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.png';


const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h4`
  padding: 0px;
  margin: 0px;
`;

const Image = styled.img`
  width: 100px;
  padding: 10px;

`;


const Cert = () => {

  useEffect(() => {
    const scrollToElement = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        console.log(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, []);

  return (
    <ContactPageContainer id="contact">
      <Title>Erkent door</Title>
      <ImageContainer>
            <Image src={cert1}></Image>
            <Image src={cert2}></Image>
      </ImageContainer>
    </ContactPageContainer>
  );
};

export default Cert;
