import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Nav>
      <div className='home'>
        <Link to='/'>Home</Link>
      </div>

      <div className='nav-links'>
        <Link to='/maps'>Maps</Link>
        <Link to='/events'>Events</Link>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  
  }

  .home{
    margin-left: 10px;
    display: flex;
    a{
      color: blue;
      margin-right: 10px;
      text-decoration: none;
      color: #000;
      background: #fff;
      font-size: 1.2rem;
      padding: 6px ;
      border-radius: 5px;
      letter-spacing: 1px;
      font-weight: 800;
      transition: all 0.3s ease-in-out;
      &:hover{
        transform: translateY(3px);
      }
    }
  }


  .nav-links{
    display: flex;
    justify-content: space-between;
    margin-right: 10px ;

    a{
      margin-right: 10px;
      text-decoration: none;
      color: #fff;
      font-size: 1.2rem;
      padding: 6px ;
      background: #000;
      border-radius: 5px;
      letter-spacing: 1px;
      font-weight: 800;
      transition: all 0.3s ease-in-out;
      &:hover{
        transform: translateY(-3px);
        color: #000;
        background: #00ff44 ;
      }
   }
  }
`;
