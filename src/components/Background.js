import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, {keyframes} from "styled-components";
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  {
    file(relativePath: {eq: "bcg-image-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({children}) => {
   const { file: {childImageSharp:{fluid}}} = useStaticQuery(query)
  
   return (
     <Wrapper>
       <BackgroundImage
         Tag="div"
         fluid={fluid}
         className="bcg"
         preserveStackingContext={true}
       >
         {children}
       </BackgroundImage>
     </Wrapper>
   )
};

const fadeIn = keyframes`
      from{background-color:rgb(0,0,0,0.8);}
      to{background-color:rgba(0,0,0,0.4);}
      `

const Wrapper = styled.section`
  .bcg {
    min-height: 100vh;
    place-items: center;
    justify-content: center;
    align-items: center;
    display: flex;
    animation: ${fadeIn} 4s ease-in-out 1 forwards;
  }

  .bcg:before {
    opacity: 1;
}

`

export default Background;