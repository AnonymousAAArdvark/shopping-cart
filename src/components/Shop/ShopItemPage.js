import React, { useState } from "react";
import styled from "styled-components";
import background from "../../assets/background-cropped.png";
import {motion} from "framer-motion";
import Songs from "../../songs";
import {FaMicrochip} from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopItemPage = ({ itemId, addToCart }) => {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const song = Songs[itemId];

  const handleClick = () => {
    addToCart({ ...song, quantity: 1});
    setShowCheckoutBtn(true);
  }

  return (
    <ShopItemPageWrapper>
      <AnimationWrapper
        exit={{opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <SongDetails>
          <img src={song.img} alt={song.name} />
          <Title>{song.name}</Title>
          <Info>Artist: {song.artist} | Duration: {song.duration}</Info>
          <Price>
            <p>Price: {song.price.toFixed(2)} MB</p>
            <DataIcon><FaMicrochip /></DataIcon>
          </Price>
          <ButtonsWrapper>
            <BtnPrimary onClick={handleClick}>Add to Cart</BtnPrimary>
            {showCheckoutBtn && (
              <BtnPrimary>
                <Link to="/checkout">Complete Order</Link>
              </BtnPrimary>
            )}
          </ButtonsWrapper>
          <BackButton>
            <Link to="/shop">&lt; Go Back</Link>
          </BackButton>
        </SongDetails>
      </AnimationWrapper>
    </ShopItemPageWrapper>
  );
};

const ShopItemPageWrapper = styled.div`
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

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 8rem 0 8rem 0;
  background-color: rgba(0, 0, 0, .5);
`;

const Title = styled.h2`
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 3px solid gray;
`;

const Info = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.light};
  margin-top: 1rem;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
`;

const DataIcon = styled.p`
  margin-left: .5rem;
  line-height: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const BtnPrimary = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  
  a {
    color: black;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.lightActive};
  }
`;

const BackButton = styled.button`
  margin: 1rem;
  background: transparent;
  font-size: 1.7rem;
  a {
    color: ${({ theme }) => theme.colors.light};
    
    &:hover {
      color: ${({ theme }) => theme.colors.lightHover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.lightActive};
    }
  }
`;

export default ShopItemPage;