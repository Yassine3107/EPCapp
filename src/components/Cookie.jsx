import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CookieBannerText = styled.p`
  margin: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-right: 16px;
  }
`;

const AcceptButton = styled.button`
  margin-top: 8px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const IgnoreButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('visitedBefore');
    if (!hasVisitedBefore) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('visitedBefore', 'true');
    setShowBanner(false);
  };

  const ignoreCookies = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <CookieBannerContainer>
        <CookieBannerText>
          This website uses cookies. By accepting, you consent to the use of cookies.
        </CookieBannerText>
        <AcceptButton onClick={acceptCookies}>Accept</AcceptButton>
        <IgnoreButton onClick={ignoreCookies}>Ignore</IgnoreButton>
      </CookieBannerContainer>
    )
  );
};

export default CookieBanner;
