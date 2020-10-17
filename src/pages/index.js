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
  console.log(projects)
 
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
        id
        description
        github_url
        page_url
        title
        image {
          childImageSharp {
            fluid {
              ...ChildImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`