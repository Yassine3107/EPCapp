import React from 'react';
import styled from 'styled-components';

const PhoneNumberContainer = styled.a`
  text-decoration: underline;
  color: #0071F2;
`;

const PhoneNumber = ({ number }) => {
  return <PhoneNumberContainer href={`tel:${number}`}>{number}</PhoneNumberContainer>;
};

export default PhoneNumber;
