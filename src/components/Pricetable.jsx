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

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
    margin-top: 40px;
`;

const Title = styled.h1`
        font-size: 3rem;
        margin-bottom: 0px;
        
        @media (max-width: 1200px) {
            font-size: 2rem; /* Adjust the font size for smaller screens */
        }

        @media (max-width: 1100px) {
            font-size: 1.5rem;
        } 
    `;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    width: 70%;
    ${marginX('auto')};
    margin-top: 30px;
    margin-bottom: 80px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr
    }
`;


const PriceCard = styled.div`
    width: 80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    padding-bottom: 10px;
    border-radius: 5%;

    @media (max-width: 1200px) {
        ${marginX('auto')};
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const PriceTitle = styled.h5`
    text-align: center;

`;

const Price = styled.span`
    color: gray;
    text-align: center;
`;




function PriceTable() {

    const pricing = [
        {
            title: 'Studio / Appartement',
            price: '€445',
        },
        {
            title: 'Geslote Bebouwing',
            price: '€495',
        },
        {
            title: 'Halfopen bebouwing',
            price: '€545',
        },
        {
            title: 'Open bebouwing',
            price: '€595',
        },
        {
            title: 'Niet-residentieel',
            price: 'op aanvraag',
            onrequest: true
        },
        {
            title: 'Gemene delen',
            price: 'op aanvraag',
            onrequest: true
        },
    ]
    
  return (
    <Container id="pricetable">
        <Title>Onze Tarieven</Title>
        <CardContainer>
        
        {
            pricing.map( (card, index) => (
                <PriceCard key={index}>
                    <PriceTitle>{card.title}</PriceTitle>
                    <Price>{card.size}  {card.price}</Price>
                </PriceCard>
            ))
        }

        
        </CardContainer>
    
    </Container>
  )
}

export default PriceTable