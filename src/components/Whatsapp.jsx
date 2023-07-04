import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

const WhatsappContainer = styled.a`
    text-decoration: underline;
    color: #25D366;
`;


const WhatsApp = ({ number }) => {
    const body = `
    Beste,\n
    Ik ben geïnteresseerd in uw diensten, zou u mij kunnen contacteren?
    \n
    Vriendelijke groeten
  `;

  return (
  <WhatsappContainer href={`whatsapp://send?phone=${number}&text=${body}`}>
    Hier
  </WhatsappContainer>
  )
};

export default WhatsApp;
