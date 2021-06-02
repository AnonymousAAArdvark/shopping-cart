import React from "react";
import styled from "styled-components";
import background from "../../assets/background-cropped.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMicrochip, FaShoppingCart } from "react-icons/fa";

const CartPage = ({ shoppingCart, addToCart, removeFromCart }) => {
  return (
    <CartPageWrapper>
      <AnimationWrapper
        exit={{opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
          {shoppingCart.length > 0 ? (
            <CartDetails>
              <Heading>Your shopping bag</Heading>
                <ul>
                  {shoppingCart.map((song) => {
                    return (
                      <BagItem key={song.id}>
                        <img src={song.img} alt={song.name} />
                        <SongDetails>
                          <div className="top">
                            <div className="info">
                              <h1>{song.name} - <span style={{fontWeight: 400}}>{song.artist}</span></h1>
                              <Price>
                                <p>Price: {song.price.toFixed(2)} MB</p>
                                <DataIcon><FaMicrochip /></DataIcon>
                              </Price>
                            </div>
                            <Info>Artist: {song.artist} | Duration: {song.duration}</Info>
                          </div>

                          <QuantityWrapper>
                            <ControlButton enabled={song.quantity > 1}
                             onClick={() =>
                               song.quantity > 1 && removeFromCart(song)
                             }
                            >-</ControlButton>
                            <Quantity>{song.quantity}</Quantity>
                            <ControlButton enabled={song.quantity < 99}
                             onClick={() =>
                               song.quantity <= 99 && addToCart(song)
                             }
                            >+</ControlButton>
                          </QuantityWrapper>
                          <RemoveBtn onClick={() => removeFromCart(song, "ALL")}>Delete</RemoveBtn>
                        </SongDetails>
                      </BagItem>
                    );
                  })}
                  <TotalPrice>
                    <p style={{paddingRight: "1rem"}}>Total: {shoppingCart
                      .reduce((total, song) => {
                        return total + song.price * song.quantity;
                      }, 0)
                      .toFixed(2)} MB</p>
                    <DataIcon><FaMicrochip /></DataIcon>
                  </TotalPrice>
                </ul>
                <BtnsWrappers>
                  <PayBtn onClick={() => window.alert("Thanks for coming by!")}>Proceed to Payment</PayBtn>
                  <BackBtn><Link to="/shop">&lt; Go Back</Link></BackBtn>
                </BtnsWrappers>
            </CartDetails>
          ) : (
            <CartDetails>
              <Heading>Your Cart is Empty</Heading>
              <CartIcon><FaShoppingCart /></CartIcon>
              <BackBtn><Link to="/shop">&lt; Go Back</Link></BackBtn>
            </CartDetails>
          )}
      </AnimationWrapper>
    </CartPageWrapper>
  );
};

const CartPageWrapper = styled.div`
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

const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 8rem 0 8rem 0;
  background-color: rgba(0, 0, 0, .5);
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

const TotalPrice = styled.div`
  border-top: 3px solid ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  padding:  1rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 3rem;
`;

const DataIcon = styled.p`
  margin-left: 5px;
  line-height: 0;
`;

const Heading = styled.h1`
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 3px solid gray;
`;

const BagItem = styled.div`
  padding: 2rem;
`;

const SongDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  padding-top: 1rem;
  
  .top {
    .info {
      display: flex;
      justify-content: space-around;
      
      @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
      }
    }
    width: 100%;
  }
`;

const ControlButton = styled.button`
  color: black;
  font-size: 2.5rem;
  margin: 1rem 0 1rem 0;
  width: 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.lightActive};
  }
`;

const Quantity = styled.p`
  color: black;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 2px;
  font-size: 2rem;
  margin: 1rem .5rem 1rem .5rem;
  width: 5rem;
  height: 3rem;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`;

const PayBtn = styled.button`
  color: black;
  font-size: 2.2rem;
  padding: 1rem;
  margin: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.lightActive};
  }
`;

const BackBtn = styled.button`
  margin: 1rem;
  background: transparent;
  font-size: 2rem;
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

const CartIcon = styled.div`
  color: ${({ theme }) => theme.colors.light};
  font-size: 7rem;
  margin-top: 2rem;
`;

const BtnsWrappers = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CartPage;