import React from "react";
import {graphql} from 'gatsby';
// ***** components ***** //
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
// ****** pages ****** //
import Courses from './courses';

export default ({data}) => {

  const {allStrapiProjects:{nodes:projects}} = data;
 
  return (
          <Layout>
            <Hero />
            <Projects projects={projects} title='featured projects' showLink />
            <Courses />
          </Layout>
  )
};


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
