import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';
//import SocialIcons from '../constants/socialLinks';


const Footer = () => {
 
   return (
     <Wrapper>
       <footer className="footer">
            <div className='footer-center'>
               <h4>
                  copyright&copy;{new Date().getFullYear()},
                  Built with <span>Gatsby</span>, all rights reserved
               </h4>
            </div>
       </footer>
     </Wrapper>
   )
}

const Wrapper = styled.footer`

   .footer {
      height: 6rem;
      padding: 2rem 2rem;
      background: #222; 
   };

   .footer h4 {
      color: var(--clr-main-white);
      margin-top: .5rem;
      font-size: .7rem;
      text-align: center;
      text-transform: uppercase;
   };

   .footer h4 span {
      color: var(--clr-primary-5);
   };
`;

export default Footer;
