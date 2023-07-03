import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import thelogo from '../assets/logo.png'

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



const NavItem = styled.a`
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

const MenuItem = styled.a`
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
    justify-content: center; 
  }
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;

    @media (max-width: 769px) {
      width: ${props => (props.isScrolling ? '70px' : '100px')};
      height: ${props => (props.isScrolling ? '70px' : '100px')};
      transition: width 0.3s ease;justify-content: center; 
    }
    
`;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
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
          <MenuItem href="/" onClick={closeMenu}>
            Home
          </MenuItem>
          <MenuItem href="#pricetable" onClick={closeMenu}>
            Tarieven
          </MenuItem>
          <MenuItem href="#whyus" onClick={closeMenu}>
            Over ons
          </MenuItem>
          <MenuItem href="#contact" onClick={closeMenu}>
            Contact
          </MenuItem>
        </Menu>
        <NavItem href="/">Home</NavItem>
        <NavItem href="#pricetable">Tarieven</NavItem>
        <NavItem href="#whyus">Over ons</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavBar>
    );
}

export default Navbar