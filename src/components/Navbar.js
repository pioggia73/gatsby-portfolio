import React from 'react';
import styled from 'styled-components';
import logo from '../assets/crown.svg';
import { FaAlignRight } from "react-icons/fa";
import PageLinks from '../constants/links';

const Navbar = ({toggleSidebar}) => {
   return (
      <Wrapper>
         <nav className='navbar'>
            <div className='nav-center'>
               <div className='nav-header'>
                  <img  src={logo} alt='logo' />
                  <button className='toggle-btn' onClick={toggleSidebar}>
                     <FaAlignRight />
                  </button>
                  <PageLinks styleClass='nav-links' />
               </div>
            </div>
         </nav>
      </Wrapper>   
   )
};

const Wrapper = styled.nav`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    z-index: 20;
  }

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header img {
    width: 3rem;
    height: auto;
  }

  .toggle-btn {
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--clr-primary-5);
  }

  .toggle-btn:hover {
    color: var(--clr-primary);
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .nav-links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .nav-links li {
      margin-right: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-primary-5);
      font-weight: bold;
      font-size: 1.7rem;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
      align-items: center;
      position: relative;
    }

    .nav-links a:link::before,
    .nav-links a:visited::before,
    .nav-links a:link::after,
    .nav-links a:visited::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.15rem;
      background-color: var(--clr-primary-5);
      transform: scaleX(0);
      transition: all 0.3s cubic-bezier(1, 0, 0, 1);
    }

    .nav-links a:link::before,
    .nav-links a:visited::before {
      top: 0;
      transform-origin: left;
    }

    .nav-links a:link::after,
    .nav-links a:visited::after {
      bottom: 0;
      transform-origin: right;
    }

    .nav-links a:hover::before,
    .nav-links a:active::before,
    .nav-links a:hover::after,
    .nav-links a:active::after {
      transform: scaleX(1);
    }

    .toggle-btn {
      display: none;
    }
  } ;
`

export default Navbar;
