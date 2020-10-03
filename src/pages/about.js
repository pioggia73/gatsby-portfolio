import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery} from 'gatsby';
//* components *//
import Layout from '../components/Layout';

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {

   const data = useStaticQuery(query)
   const {file:{childImageSharp:{fluid}}} = data
 
   return (
     <Wrapper>
       <Layout>
         <section className="about section">
           <div className="section-center about-center">
             <article className="about-info">
                <div className='underline'></div>
                   <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum
                   </p>
               
             </article>
             <div className='about-img'>
              <Image fluid={fluid}  className = 'monika' />
             </div>
           </div>
         </section>
       </Layout>
     </Wrapper>
   )
};

const Wrapper = styled.section`
  .about {
    /* margin-top: -5rem; */
    padding-top: 5rem;
    height: 100vh;
    background: var(--clr-primary-10);
    position: relative;
  }

  .about-center {
    height: 100%;
    display: grid;
    align-items: center;
  }

  .about-info {
    width: 80vw;
    margin: 0 auto;
  }

  .about-info p {
    line-height: 3rem;
    margin-top: 2rem;
  };

  .about-info .underline {
    margin-left: 0;
  }

  .about-img {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .about::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    };

    .about-center {
      grid-template-columns: repeat(12, 1fr);
    }

    .about-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }

    .about-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
      position: relative;
    }

    .about-img::before {
      content: "";
      position: absolute;
      background: var(--clr-primary-5);
      height: 100%;
      width: 100%;
      top: -2rem;
      left: 4rem;
    }
  }

  @media screen and (min-width: 1170px) {

    .about-info {
      grid-column: 1 / span 8;
    };

    .about-info p {
      width: 50%;
      font-size: 1.5rem;
    };

    .about-img {
      width: 40rem;
      grid-column: 8 / -1;
    };

    .monika {
      position: relative;
    }
  };
`

export default About;
