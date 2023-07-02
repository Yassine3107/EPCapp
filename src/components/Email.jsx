import React from 'react';
import styled from 'styled-components';

const EmailContainer = styled.a`
  text-decoration: underline;
`;

const Email = ({ email }) => {
  return <EmailContainer href={`mailto:${email}`}>{email}</EmailContainer>;
};

export default Email;
