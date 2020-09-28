import React from 'react';
import styled from 'styled-components';
//import { FaLinkedIn, FaGithubSquare } from "react-icons/fa"

// const data = [
//   {
//       id: 1,
//       icon: <FaLinkedIn className="social-icon" />,
//       url: "https://www.linkedin.com/in/monika-wasilewska-8098921a9",
//   },
//   {
//       id: 2,
//       icon: <FaGithubSquare className="social-icon" />,
//       url: "https://github.com/pioggia73?tab=repositories",
//   },
// ]

const Footer = () => {
 
   return (
     <Wrapper>
       <footer className="footer">
           <h4>
            copyright&copy;{new Date().getFullYear()},
            Built with <span>Gatsby</span>, all rights reserved
           </h4>
       </footer>
     </Wrapper>
   )
}

const Wrapper = styled.footer`

   .footer {
      height: 6rem;
      background: #222;
      display: flex;
      justify-content: center;
      align-items: center;
   
   };

   .footer h4 {
      color: var(--clr-main-white);
      margin-top: .5rem;
      font-size: .7rem;
      text-transform: uppercase;
   };

   .footer h4 span {
      color: var(--clr-primary-5);
   }

`;

export default Footer;
