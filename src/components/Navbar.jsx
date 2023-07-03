import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import thelogo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const marginX = (value) => css`
    margin-left: ${value};
    margin-right: ${value};
`;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 1rem;
  justify-content: space-between;
  ${marginX('auto')};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  
`;


const NavItem = styled(Link)`
  color: #333;
  margin-right: 1rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLinkNav = styled(ScrollLink)`
  color: #333;
  margin-right: 1rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  z-index: 1;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background-color: #fff;
    transition: right 0.3s ease-in-out;

    @media (min-width: 769px) {
    display: none;
    }
`;

const MenuItem = styled(Link)`
  color: #333;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
  border-bottom: 1px solid #d3d3d3; 
`;

const ScrollLinkMob = styled(ScrollLink)`
  color: #333;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
  border-bottom: 1px solid #d3d3d3; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: left; 

  @media (max-width: 769px) {
    // justify-content: center; 
  }
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;

    @media (max-width: 769px) {
      width: ${props => (props.isScrolling ? '70px' : '100px')};
      height: ${props => (props.isScrolling ? '70px' : '100px')};
      transition: width 0.3s ease;
      justify-content: center; 
    }
`;

const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

const FloatingButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 24px;
`;


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const body = `
      Beste,\n

      Ik ben geïnteresseerd in uw diensten, zou u mij kunnen contacteren?
      \n
      Vriendelijke groeten
    `;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

    const handleEmailClick = () => {
      window.location.href = `mailto:example@example.com?body=${body}`;
    };

    const handleTelClick = () => {
      window.location.href = 'tel:123345678';
    };

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolling(true);
          } else {
            setIsScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
  
    return (
        <NavBar>
            <Overlay open={isOpen} onClick={closeMenu} />
          <LogoContainer>
            <Logo src={thelogo} alt="Logo" isScrolling={isScrolling}/>
          </LogoContainer>
        <Burger onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#333" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </Burger>
        <Menu open={isOpen}>
          <CloseButton onClick={closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#333" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </CloseButton>
          {
            
            ( 
              (location.pathname.includes('asbest') || location.pathname.includes('epc')) ?
            <>
              <MenuItem to="/" onClick={closeMenu}>
                Home
              </MenuItem>
              <MenuItem to={{ pathname: "/", hash: "#pricetable" }} onClick={closeMenu}>
                Tarieven
              </MenuItem>
              <MenuItem to="/epc"  onClick={closeMenu}>
                EPC
              </MenuItem>
              <MenuItem to="/asbest" onClick={closeMenu}>
                Asbest
              </MenuItem>
              <MenuItem to="/#whyus" onClick={closeMenu}>
                Over ons
              </MenuItem>
              <MenuItem to="/#contact" onClick={closeMenu}>
                Contact
              </MenuItem>
            </>
            :
            <>
              <MenuItem to="/" onClick={closeMenu}>
                Home
              </MenuItem>
              <ScrollLinkMob to="pricetable" smooth={true} duration={500} offset={-120} onClick={closeMenu}>
                Tarieven
              </ScrollLinkMob>
              <MenuItem to="/epc"  onClick={closeMenu}>
                EPC
              </MenuItem>
              <MenuItem to="/asbest" onClick={closeMenu}>
                Asbest
              </MenuItem>
              <ScrollLinkMob to="whyus" smooth={true} duration={500} offset={-120} onClick={closeMenu}>
                Over ons
              </ScrollLinkMob>
              <ScrollLinkMob to="contact" smooth={true} duration={500} offset={-120} onClick={closeMenu}>
                Contact
              </ScrollLinkMob>
            </>)
          }
        </Menu>

        {
          (
          (location.pathname.includes('asbest') || location.pathname.includes('epc')) ?
          <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/#pricetable">Tarieven</NavItem>
            <NavItem to="/#whyus" >Over ons</NavItem>
            <NavItem to="/epc">EPC</NavItem>
            <NavItem to="/asbest">Asbest</NavItem>
            <NavItem to="/#contact">Contact</NavItem>
          </>
          :
          <>
            <NavItem to="/">Home</NavItem>
            <ScrollLinkNav to="pricetable" smooth={true} duration={500} offset={-120}>Tarieven</ScrollLinkNav>
            <ScrollLinkNav to="whyus" smooth={true} duration={500} offset={-120}>Over ons</ScrollLinkNav>
            <NavItem to="/epc">EPC</NavItem>
            <NavItem to="/asbest">Asbest</NavItem>
            <ScrollLinkNav to="contact" smooth={true} duration={500} offset={-120}>Contact</ScrollLinkNav>
          </>
          )
          
        }
        <FloatingButtonWrapper>
        <FloatingButton onClick={handleTelClick}>
          <ButtonIcon icon={faPhone} />
        </FloatingButton>
        <FloatingButton onClick={handleEmailClick}>
          <ButtonIcon icon={faEnvelope} />
        </FloatingButton>
      </FloatingButtonWrapper>
      </NavBar>
    );
}

export default Navbar