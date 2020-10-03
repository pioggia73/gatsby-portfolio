import React from 'react';
import styled from 'styled-components';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import {FaTimes} from 'react-icons/fa';


const Sidebar = ({isOpen, toggleSidebar}) => {

   return (
      <Wrapper>
      <aside className={`sidebar ${isOpen? 'show-sidebar': ''}`}>
         <button className='close-btn' onClick={toggleSidebar} >
            <FaTimes />
         </button>
         <div className='side-container'>
            <Links styleClass= {`${isOpen ? 'sidebar-links' : ''}`} />
            <SocialLinks styleClass = {`${isOpen ? 'sidebar-icons' : ''}`} />
         </div>
      </aside>
      </Wrapper>
   )
}

const Wrapper = styled.div`
  .sidebar {
    background: var(--clr-grey-10);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);
  };

  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    transition: var(--transition);
    border-radius: var(--radius);
  };

  .sidebar-links li a:hover {
    background: var(--clr-primary-9);
    color: var(--clr-primary-5);
  };

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  };

  .sidebar-links li {
    opacity: 0;
  };

  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  };

  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out .3s forwards;
  };
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  };
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  };
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  };
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  };

  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* ---------------------------------------------------/
  icons animation 
  ------------------------------------------------------- */
  
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp .5s ease-in-out .3s forwards;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  
  @keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

  @media screen and (min-width: 992px) {
    .sidebar {
      transform: translateX(-100%);
    }
  };
`

export default Sidebar;
