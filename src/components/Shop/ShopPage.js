import React from "react";
import styled from "styled-components";
import background from "../../assets/background-cropped.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Songs from "../../songs";
import icon from "../../assets/disk.png";
import { FaMicrochip } from "react-icons/fa";

const ShopPage = () => {
  return (
    <ShopPageWrapper>
      <AnimationWrapper
        exit={{opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Title>Single Collection | Songs</Title>
        <SongsContainer>
          {Songs.map((song) => {
            return (
              <Link key={song.id} to={`shop/${song.id}`}>
                <SongCard>
                  <Gradient><img src={song.img} alt={song.name} /></Gradient>
                  <Icon src={icon} />
                  <Info>
                    <Name>{song.name}</Name>
                    <Price>
                      <Data>{song.price.toFixed(2)} MB </Data>
                      <DataIcon><FaMicrochip /></DataIcon>
                    </Price>
                  </Info>
                </SongCard>
              </Link>
            )
          })}
        </SongsContainer>
      </AnimationWrapper>
    </ShopPageWrapper>
  );
};

const ShopPageWrapper = styled.div`
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
  padding-top: 8rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 3px solid gray;
`;

const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  max-width: 120rem;
  margin: 4rem 10vh 8rem 10vh;
  
  @media (max-width:1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SongCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gradient = styled.div`
  &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 0, 0, .95), rgba(0, 0, 0, .2));
    height: 100%;
    width: 100%;
    content: '';
  }
`;

const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  max-width: 20%;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
`;

const Name = styled.p`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.light};
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .8);
`;

const Data = styled.p`
  color: black;
`;

const DataIcon = styled.p`
  margin-left: .5rem;
  font-size: 1.5rem;
  color: black;
  line-height: 0; 
`;

export default ShopPage;