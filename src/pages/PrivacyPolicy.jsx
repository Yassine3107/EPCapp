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

const PrivacyPolicy = () => {
  return (
    <>
        <Navbar/>
        <PageContainer>
            <PageTitle>Privacy Policy</PageTitle>
            <PageContent>
                <h2>1. Information We Collect</h2>
                <p>
                We collect certain information about you when you visit our website
                or use our services. This includes your name, email address, and any
                other information you provide to us voluntarily.
                </p>

                <h2>2. Use of Information</h2>
                <p>
                We use the information we collect to provide and improve our services,
                personalize your experience, and send you relevant communications.
                </p>

                <h2>3. Data Security</h2>
                <p>
                We take appropriate measures to protect your personal information
                against unauthorized access, alteration, or disclosure.
                </p>

            </PageContent>
        </PageContainer>
        <Footer/>
    </>
    
  );
};

export default PrivacyPolicy;
