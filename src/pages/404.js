import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
//***** components *****/
import Background from '../components/Background';
//import CustomButton from '../components/CustomButton';

const ErrorPage = () => {
   return (
      <Wrapper>
         <Background>
            <div className='hero-center'>
               <div className='underline'></div>
               <h2>No page found</h2>
               <Link to='/' className='btn center-btn'>back home</Link>
            </div>
         </Background>
      </Wrapper>
   )
};

const Wrapper = styled.section`

   .hero-center {
      width: 80vw;
      max-width: 80rem;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
         h2 {
            color: var(--clr-main-white);
            margin-bottom: 4rem;
   } 
}
`

export default ErrorPage;
