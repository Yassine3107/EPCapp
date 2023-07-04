import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQHeader = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const FAQSection = styled.div`
  margin-bottom: 30px;
`;

const FAQQuestion = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FAQAnswer = styled.div`
  font-size: 16px;
`;

const FAQ = () => {
  return (
    <>
    <Navbar/>
    <FAQContainer>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <FAQSection>
        <FAQQuestion>Question 1</FAQQuestion>
        <FAQAnswer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque neque vel nibh viverra rhoncus. Curabitur in iaculis lectus, non consectetur quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </FAQAnswer>
      </FAQSection>
      <FAQSection>
        <FAQQuestion>Question 2</FAQQuestion>
        <FAQAnswer>
          <p>Donec tristique posuere facilisis. Vestibulum et convallis sapien. Aliquam ut varius nisi, id aliquam dui. Aliquam lacinia ex ac elit ultrices, ac bibendum elit lacinia.</p>
        </FAQAnswer>
      </FAQSection>
      {/* Add more FAQ sections as needed */}
    </FAQContainer>
    <Footer/>
    </>
  );
};

export default FAQ;
