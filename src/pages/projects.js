import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
//***** components  ******/
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = ({
  data: {allStrapiProjects:{ nodes:projects },},
}) => { 
    return (
      <Wrapper>
          <Layout>
            <section className='projects-page'>
              <Projects projects={projects} title='all projects'/>
            </section>
          </Layout>
      </Wrapper>
    )
};

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack_item {
          title
          id
        }
      }
    }
  }
`

const Wrapper = styled.section`


`

export default ProjectsPage;
