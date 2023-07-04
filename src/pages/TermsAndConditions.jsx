import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const PageContent = styled.div`
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TermsPage = () => {
  return (
    <>
    <Navbar/>
    <PageContainer>
      <PageTitle>Terms & Conditions</PageTitle>
      <PageContent>
        <h2>1. Toepassing</h2>
        <p>
          1.1 Deze algemene voorwaarden zijn geldig voor alle overeenkomsten en aanbiedingen met betrekking tot dienstverlening door EPC247 Commanditaire Vennootschap, gevestigd in Grobbendonk, postcode 2280, op het adres Bouwelse Steenweg 17 en geregistreerd onder KBO-nummer XXXX.XXX.XXX.
        </p>
        <p>
          1.2 Door de aanvaarding van de offerte, overeenkomst, facturen of enig ander document verklaart de klant tevens akkoord te gaan met deze voorwaarden.
        </p>
        <p>
          1.3 Voor afwijkingen is uitdrukkelijke en schriftelijke goedkeuring van EPC247 Commanditaire Vennootschap vereist. Eventuele tegenstrijdige clausules in de voorwaarden van de klant worden als nietig beschouwd en ondergeschikt aan deze voorwaarden.
        </p>


        <h2>2. Overeenkomst</h2>
        <p>
          2.1 Bij annulering of opzegging van een overeenkomst door de klant is deze een vergoeding verschuldigd. Deze vergoeding is gelijk aan de waarde van alle reeds geleverde prestaties, vermeerderd met 20% van de prijs van de nog niet geleverde prestaties.
        </p>
        <p>
          2.2 Indien er betalingsproblemen, samenloop van schuldeisers, faillissement, gerechtelijke reorganisatie of andere vergelijkbare situaties optreden waaruit blijkt dat de klant financiële moeilijkheden heeft, behoudt EPC247 Commv het recht om haar prestaties op te schorten. Indien deze situatie aanhoudt, heeft EPC247 Commv het recht om de overeenkomst te ontbinden, waarbij de kosten voor rekening van de klant komen.
        </p>

        <p>
        3. Aansprakelijkheid
        </p>
        <p>
        3.1 EPC247 Commv spant zich in om de geleverde prestaties naar beste vermogen en in overeenstemming met de geldende professionele normen uit te voeren. De klant dient de geleverde prestaties binnen een termijn van [aantal dagen] na levering te onderzoeken op eventuele tekortkomingen of gebreken en deze schriftelijk te melden aan EPC247 Commv. Bij gebreke hiervan worden de geleverde prestaties geacht te zijn aanvaard.
        </p>
        <p>
        3.2 EPC247 Commv is niet aansprakelijk voor enige schade, direct of indirect, voortvloeiend uit de uitvoering van haar diensten, tenzij er sprake is van opzet of grove nalatigheid aan de zijde van EPC247 Commv.
        </p>
        <p>
        3.3 EPC247 Commv is niet aansprakelijk voor eventuele tekortkomingen of gebreken in de geleverde prestaties, tenzij de klant deze binnen de in artikel 3.1 genoemde termijn schriftelijk heeft gemeld en EPC247 Commv in de gelegenheid heeft gesteld om deze tekortkomingen of gebreken te herstellen.
        </p>

        <h2>4. Intellectuele eigendom</h2>
        <p>
        4.1 Alle intellectuele eigendomsrechten met betrekking tot de door EPC247 Commv geleverde diensten, zoals maar niet beperkt tot software, rapporten, documentatie, ontwerpen, enz., blijven eigendom van EPC247 Commv, tenzij anders overeengekomen.
        </p>
        <p>
        4.2 Het is de klant niet toegestaan om zonder voorafgaande schriftelijke toestemming van EPC247 Commv de door EPC247 Commv geleverde diensten geheel of gedeeltelijk te kopiëren, te wijzigen, te reproduceren, openbaar te maken, te distribueren of op enige andere wijze te gebruiken of ter beschikking te stellen aan derden.
        </p>

        <h2>5. Toepasselijk recht en geschillen</h2>
        <p>
        5.1 Op alle overeenkomsten tussen EPC247 Commv en de klant is het Belgische recht van toepassing.
        </p>
        <p>
        5.2 Geschillen voortvloeiend uit of verband houdend met de overeenkomst tussen EPC247 Commv en de klant zullen in eerste instantie worden voorgelegd aan de bevoegde rechtbank te Antwerpen, België.
        </p>

      </PageContent>
    </PageContainer>
    <Footer/>
    </>
  );
};

export default TermsPage;
