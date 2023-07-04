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
        <h2>Artikel 1 – Toepassing </h2>
        <p>
        1.1 Deze algemene voorwaarden zijn geldig voor alle overeenkomsten en aanbiedingen met betrekking tot dienstverlening door EPC247 Commanditaire Vennootschap, gevestigd in Grobbendonk, postcode 2280, op het adres Bouwelse Steenweg 17 en geregistreerd onder KBO-nummer XXXX.XXX.XXX.         </p>
        <p>
        1.2 Door de aanvaarding van de offerte, overeenkomst, facturen of enig ander document verklaart de klant tevens akkoord te gaan met deze voorwaarden.         </p>
        <p>
        1.3 Voor afwijkingen is uitdrukkelijke en schriftelijke goedkeuring van EPC247 Commanditaire Vennootschap vereist. Eventuele tegenstrijdige clausules in de voorwaarden van de klant worden als nietig beschouwd en ondergeschikt aan deze voorwaarden.         </p>


        <h2>Artikel 2 – Overeenkomst </h2>
        <p>
        2.1 Bij annulering of opzegging van een overeenkomst door de klant is deze een vergoeding verschuldigd. Deze vergoeding is gelijk aan de waarde van alle reeds geleverde prestaties, vermeerderd met 20% van de prijs van de nog niet geleverde prestaties.         </p>
        <p>
        2.2 Indien er betalingsproblemen, samenloop van schuldeisers, faillissement, gerechtelijke reorganisatie of andere vergelijkbare situaties optreden waaruit blijkt dat de klant financiële moeilijkheden heeft, behoudt EPC247 Commv het recht om haar prestaties op te schorten. Indien deze situatie aanhoudt, heeft EPC247 Commv het recht om de overeenkomst te ontbinden, waarbij de kosten voor rekening van de klant komen.         </p>

        <p>
        Artikel 3 – Aansprakelijkheid 
        </p>
        <p>
        3.1 Klachten dienen altijd schriftelijk per aangetekende post of per e-mail te worden gemeld, en dit uiterlijk binnen 8 dagen na de uitvoering van de prestaties. Na deze termijn worden de prestaties als aanvaard beschouwd.         </p>
        <p>
        3.2 Indien EPC247 Commv aansprakelijk kan worden gesteld, blijft deze aansprakelijkheid beperkt tot de directe schade die hieruit voortvloeit. EPC247 Commv kan in geen geval aansprakelijk worden gesteld voor indirecte schade of gevolgschade. In geval van aansprakelijkheid kan EPC247 Commv alleen aangesproken worden voor een bedrag dat gelijk is aan de prijs van de betreffende dienst.        </p>

        <h2>Artikel 4 – Betaling </h2>
        <p>
        4.1 De prijs van onze diensten is gebaseerd op de tarieven die van toepassing zijn op het moment van de bestelling van de overeengekomen diensten. Deze prijs wordt in rekening gebracht volgens de tarieven die te vinden zijn op de website www.epc247.be 
        </p>
        <p>
        4.2 De prijzen zijn inclusief BTW en verplaatsingskosten, tenzij dit anders wordt vermeld.         
        </p>
        <p>
        4.3 De vermelde prijzen kunnen te allen tijde worden aangepast. Het kan voorkomen dat de geleverde prestaties en bijbehorende kosten, om welke reden dan ook, hoger uitvallen dan oorspronkelijk voorzien. Dit geldt met name voor aanvullende onderzoeken die nodig kunnen zijn op basis van vaststellingen die tijdens de uitvoering van de prestaties ter plaatse zijn gedaan, afwijkend van het oorspronkelijke programma of als de klant onvolledige of onjuiste informatie heeft verstrekt. 
        </p>
        <p>
        4.4 Indien een keuring op de dag zelf of een werkdag ervoor wordt geannuleerd, zal dit in rekening worden gebracht tegen de volledige kosten van de gevraagde keuring. Annuleringen worden alleen verwerkt tijdens kantooruren. Onze kantooruren zijn van maandag tot en met vrijdag van 09:00 tot 17:00 uur 
        </p>
        <p>
            4.5 De klant heeft de mogelijkheid om zijn bestelling op een van de volgende manieren te betalen, naar eigen keuze en volgens de voorziene modaliteiten op www.epc247.be: 
            1. Betaling per overschrijving vóór de uitvoering van de opdracht. 
            2. Betaling per overschrijving na ontvangst van de factuur. 
            EPC247 Commv behoudt zich het recht voor om, zonder opgave van reden, de beschikbaarheid van bepaalde betalingsmethoden uit te stellen, op te schorten of te beperken. 
        </p>
        <p>
        4.6 Alle facturen dienen te worden betaald uiterlijk op de vervaldag, die 14 dagen na de factuurdatum is. 
        </p>
        <p>
        4.7 De betaling van facturen dient uitsluitend en persoonlijk aan EPC247 of aan de verkoper te worden voldaan. EPC247 zal nooit de betaling bij derden opvragen. 
        </p>
        <p>
        4.8 De verslagen worden naar de klant gestuurd zodra EPC247 de betaling heeft ontvangen. 
        </p>
        <p>
        4.9 Indien wij een voorschot vragen, zullen wij onze activiteiten pas aanvangen na ontvangst van het voorschot. 
        </p>
        <p>
        4.10 Elke weigering om te betalen, ongeacht de reden, dient uiterlijk vóór aanvang van de opdracht te worden gemeld. 
        </p>
        <p>
        4.11 Indien betaling ter plaatse is voorzien, dient elke weigering of onmogelijkheid om te betalen uiterlijk vóór aanvang van de opdracht aan de agent ter plaatse te worden gemeld. Elk (geheel of gedeeltelijk) onbetaald bedrag zal automatisch, zonder voorafgaande ingebrekestelling, vermeerderd worden met de volgende kosten: 

<br></br>a) Een verplaatsingsvergoeding van 50,00 EUR, die de verplaatsingskosten van de agent dekt. 

<br></br>b) Een inningsvergoeding van 10% van het verschuldigde bedrag. 

<br></br>c) Een verwijlintrest van 10%, berekend vanaf de vervaldag van de factuur tot aan de volledige betaling. 

<br></br>d) Een bijkomende vergoeding van 15% van het factuurbedrag. 

<br></br>e) Een vergoeding van 7,50 EUR per aangetekende brief, alsook een vergoeding van 50,00 EUR per ingebrekestelling. 
        </p>
        <p>
        4.12 Indien het contract bepaalt dat de betaling van de opdracht na ontvangst van de factuur dient te gebeuren, dient elke betwisting met betrekking tot de factuur binnen 8 werkdagen na ontvangst van de factuur per aangetekend schrijven aan EPC247 Commv te worden gemeld, op straffe van onontvankelijkheid. Elk (geheel of gedeeltelijk) onbetaald bedrag op de vervaldatum zal automatisch, zonder voorafgaande ingebrekestelling, vermeerderd worden met de volgende kosten: 

        <br></br>a) Een inningsvergoeding van 10% van het verschuldigde bedrag. 

        <br></br>b) Een verwijlintrest van 10%, berekend vanaf de vervaldag van de factuur tot aan de volledige betaling. 

        <br></br>c) Een vergoeding van 7,50 EUR per aangetekende brief, evenals een vergoeding van 50,00 EUR per ingebrekestelling. 

        <br></br>d) Een bijkomende vergoeding van 15% van het factuurbedrag. 
        </p>
        <p>
        4.13 In geval van niet- of laattijdige betaling zullen alle onbetaalde facturen onmiddellijk en volledig opeisbaar zijn, zelfs als de vervaldatum nog niet is verstreken. Elk eerder verleend uitstel van betaling komt in dat geval te vervallen. 
        </p>
        <p>
        4.14 EPC247 Commv behoudt zich ook het recht voor om in geval van achterstallige bedragen, zelfs gedeeltelijk, de verdere prestaties op te schorten totdat de volledige betaling is ontvangen in hoofdsom, rente en eventuele schadevergoeding, tenzij de klant anders bericht. In dat geval kan de klant geen aanspraak maken op enige compensatie als gevolg van de opschorting. In bepaalde gevallen kan de regelgeving vereisen dat het opschorten van de prestaties aan de toezichthoudende autoriteiten wordt gemeld. 
        </p>
        <p>
        4.15 Elke wijziging in de situatie van de klant, zoals de verkoop of gedeeltelijke overdracht van het vermogen, overlijden, handelingsonbekwaamheid, betalingsmoeilijkheden, opschorting van betalingen, vereffening van activa, gerechtelijke regeling, voorlopige opschorting van vervolgingen, faillissement of enige andere soortgelijke procedure, ontbinding of wijziging van de rechtsvorm, zelfs na gedeeltelijke uitvoering van de contracten of bestellingen, zal leiden tot dezelfde maatregelen als hierboven vermeld voor niet- of laattijdige betaling. 
        </p>
        <h2>Artikel 5 – Overmacht </h2>
        <p>
        5.1 Indien EPC247 Commv verhinderd is om een van de diensten waarvoor de overeenkomst is afgesloten uit te voeren of te voltooien als gevolg van gebeurtenissen buiten haar controle, waaronder, maar niet beperkt tot, natuurrampen, oorlog, terroristische activiteiten, sociale onrust, het ontbreken van toestemming/licenties/registraties, ziekte, overlijden, ontslag van de betrokken werknemer of het niet nakomen van contractuele verplichtingen door de klant, zal EPC247 Commv contact opnemen met de klant om een nieuwe afspraak te maken.         </p>
        <p>
        5.2 De uitvoering van de overeenkomst zal worden opgeschort tot de datum van de nieuwe afspraak. 
        </p>
        <h2>Artikel 6 -Toepasbar recht en de regelingen van geschillen  </h2>
        <p>
        6.1 In geval van enig geschil betreffende de geldigheid, interpretatie of uitvoering van dit document, zal primair gestreefd worden naar een minnelijke regeling. Indien een minnelijke regeling niet mogelijk blijkt, zal het geschil worden beslecht conform de Belgische wetgeving. De rechtbanken in Brussel zullen exclusieve bevoegdheid hebben over de zaak, op verzoek van de partij die het geschil aanhangig maakt. De partijen komen overeen dat de juridische procedure in het Nederlands zal worden gevoerd. 
        </p>
        <h2> Artikel 7 – Varia  </h2>
        <p>
        7.1 Indien een of meerdere bepalingen van deze algemene voorwaarden ongeldig, onwettig, ontoepasbaar verklaard worden, dan zal dit de geldigheid, wettigheid of de tegenstelbaarheid van de andere bepalingen niet aantasten of verminderen. Voor wijzigingen of klachten betreffende de bestelling, kan de klant contact opnemen via www.epc247.be of door te mailen naar info@epc247.be 
        </p>


      </PageContent>
    </PageContainer>
    <Footer/>
    </>
  );
};

export default TermsPage;
