import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ cartSize }) => {
  return (
    <NavBarWrapper>
      <Link to="/"><Logo src={logo} /></Link>

      <ul>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/shop">Shop</Link>
        </ul>
        <ul>
          <Link to="/checkout">Cart ({cartSize})</Link>
        </ul>
      </ul>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding: 10px 40px;
  
  background-color: rgba(0, 0, 0, .5);
  
  & > ul {
    display: flex;
    align-items: center;
    
    & > ul a {
      font-family: monospace;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.light};
      text-decoration: none;
      
      transition: .5s;
      
      &:hover {
        color: ${({ theme }) => theme.colors.lightHover};
      }
      
      &:active {
        color: ${({ theme }) => theme.colors.lightActive};
      }
    }
    
    & > ul:not(:first-child) a {
      padding-left: 20px;
    }
  }
  
  @media (max-width: 630px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 12rem;
  transition: .1s;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 630px) {
    display: none;
  }
`;

export default NavBar;