import React from 'react'
import styled, { css } from 'styled-components'


const marginX = (value) => css`
    margin-left: ${value};
    margin-right: ${value};
`;

const paddingY = (value) => css`
    padding-top: ${value};
    padding-bottom: ${value};
`;

const TitleI = styled.h1`
    
`;

function Title() {
  return (
    <Title></Title>
  )
}

export default Title