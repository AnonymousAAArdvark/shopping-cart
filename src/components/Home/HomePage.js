import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import background from "../../assets/background-cropped.webp";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <AnimationWrapper
        exit={{opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Logo src={logo} />
        <Shop>
          <Link to="/shop">visit the shop</Link>
        </Shop>
        <Desc>"Phigros is a laneless, multi-judgement-line music game.
          The dynamic judge line dances with the rhythm of music, beating, shifting, moving around, and stacking notes...
          Rapid reaction is essential during play, so challenge yourself!"</Desc>
      </AnimationWrapper>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  padding-top: 30vh;
  width: 60vh;
`;

const Shop = styled.p`
  padding: 20px;
  a {
    color: ${({ theme }) => theme.colors.light};
    font-size: 22px;
    text-space: 10px;
    font-family: inherit;
    letter-spacing : 10px;
    animation: 2s ease 0s infinite alternate pulse;
    
    &:hover {
      color: ${({ theme }) => theme.colors.lightHover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.lightActive};
    }
  }
  
  @keyframes pulse {
    from { letter-spacing: 10px; }
    to { letter-spacing: 13px; }
  }
`;

const Desc = styled.p`
  max-width: 90vh;
  text-align: center;
  line-height: 2;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light};
  padding-bottom: 5rem;
`;

export default HomePage;