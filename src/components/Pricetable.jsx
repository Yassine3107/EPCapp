import React, { useState } from 'react'
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

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    ${marginX('auto')};
    margin-top: 20px;
    margin-bottom: 20px;
`;


const PriceCard = styled.div`
    width: 80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    padding-bottom: 10px;
    border-radius: 5%;
    justify-content: space-between;

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

const Button = styled.button`
    background-color: ${props => (props.isSelected ? '#0071F2' : 'white')};
    color: ${props => (props.isSelected ? 'white' : 'black')};
    border-radius: 5px;
    border: none;
    min-width: 90px;
    ${paddingY('10px')};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    &:hover{
        cursor: pointer;
    }
    
    @media (max-width: 1100px) {
z        max-width: 50%;
        text-align: center;
    }
`;




function PriceTable() {

    const [epcSelected, setEpcSelected] = useState(true);
    const [asbestSelected, setAsbestSelected] = useState(false);


    const pricingAsbest = [
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

    const pricingEPC = [
        {
            title: 'Studio',
            price: '€95',
        },
        {
            title: 'Appartement',
            price: '€150',
        },
        {
            title: 'Geslote Bebouwing',
            price: '€165',
        },
        {
            title: 'Halfopen bebouwing',
            price: '€175',
        },
        {
            title: 'Open bebouwing',
            laag: '(1 bouwlaag)',
            price: '€210',
        },
        {
            title: 'Open bebouwing',
            laag: '(≥2 bouwlagen)',
            price: '€225',
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
        <ButtonContainer>
            <Button onClick={() => {setEpcSelected(true); setAsbestSelected(false)}} isSelected={epcSelected}>EPC</Button>
            <Button onClick={() => {setEpcSelected(false); setAsbestSelected(true)}} isSelected={asbestSelected}>Asbest</Button>
        </ButtonContainer>
        <CardContainer>
        {
            asbestSelected ?
            pricingAsbest.map( (card, index) => (
                <PriceCard key={index}>
                    <PriceTitle>{card.title}</PriceTitle>
                    <Price>{card.size} {card.price}</Price>
                </PriceCard>
            )) :
            pricingEPC.map( (card, index) => (
                <PriceCard key={index}>
                    <PriceTitle>
                        {card.title}<br></br>
                        <span style={{fontSize: 11, fontWeight: 400}}>{card.laag}</span>
                    </PriceTitle>
                    
                    <Price>{card.size} {card.price}</Price>
                </PriceCard>
            ))
        }
        </CardContainer>
    </Container>
  )
}

export default PriceTable