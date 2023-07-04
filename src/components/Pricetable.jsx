import React, { useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import asbestPricing from '../data/PricingAsbest.json'
import epcPricing from '../data/PricingEPC.json'
import { useLocation } from 'react-router-dom';


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
    margin-bottom: 50px;
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
    margin-bottom: 30px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 30px;
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
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    padding-bottom: 10px;
    border-radius: 5%;
    justify-content: space-between;
    text-align: center;

    @media (max-width: 1200px) {
        ${marginX('auto')};
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px
    }

    @media (min-width: 1200px) {
        height: 155px;
    }
`;

const PriceTitle = styled.h5`
    text-align: center;

`;

const Price = styled.span`
    color: gray;
    text-align: center;
`;

const Span = styled.span`
    color: gray;
    width:  70%;
    ${marginX('auto')};

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


    const pricingAsbest = ""

    const pricingEPC = ""

    useEffect(() => {
        const scrollToElement = () => {
          const { hash } = window.location;
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              const offset = -120;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const scrollPosition = elementPosition + offset;
              window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
          }
        };
      
        // Scroll to the element after a short delay to ensure the page has rendered
        setTimeout(scrollToElement, 100);
      }, []);
      

      
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
            asbestPricing.map( (card, index) => (
                <PriceCard key={index}>
                    <PriceTitle>{card.title}</PriceTitle>
                    <Price>{card.size} {card.price}</Price>
                </PriceCard>
            )) :
            epcPricing.map( (card, index) => (
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
        { asbestSelected && <Span>* Voor bijkomende staalnames wordt een prijs van €30 inclusief btw aangerekend.</Span>}
    </Container>
  )
}

export default PriceTable