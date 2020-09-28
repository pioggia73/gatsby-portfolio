import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery} from 'gatsby';
import {FaAngleDoubleRight} from 'react-icons/fa'

// ***** components ***** //
import Title from '../components/Title';

const query = graphql`
  {
    allStrapiCourses {
      nodes {
        id
        name
        course {
          course_description
          id
          course_url
        }
      }
    }
  }
`

const Courses = () => {

   const data = useStaticQuery(query)
   const {allStrapiCourses: {nodes: courses},} = data 
   const [value, setValue] = React.useState(0)
   const {name, course} = courses[value]

   return (
      <Wrapper>
      <section className='section'>
         <Title title='education' />
         <div className='courses-center'>
            {/*  buttons container*/}
            <div className='btn-container'>
            {courses.map((item, index) => {
               return   <button key={index} 
                                 className= {`courses-btn ${index===value && 'active-btn'}`}
                                 onClick={()=> setValue(index)}
                        >
                           {item.name}
                        </button>
            }) }
            </div>

            {/* courses container */}
            <article className='course-info'>
               {course.map((item) => {
                  return (
                    <div key={item.id} className="course-description">
                      <FaAngleDoubleRight className="course-icon" />
                      <a
                        href={item.course_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>{item.course_description}</p>
                      </a>
                    </div>
                  )
               })}
            </article>
         </div>
      </section>
      </Wrapper>
   )
};

const Wrapper = styled.section`
  .courses-center {
    width: 88vw;
    margin: 0 auto;
    max-width: var(--max-width);
  };

  .btn-container {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  };

  .courses-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
  };

  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  };

  .course-icon {
    color: var(--clr-primary-5);
  };

  .course-description {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  };

  .course-description p {
    font-size: 1.3rem;
  };

  @media screen and (min-width: 992px) {
    .courses-center {
      width: 70vw;
      display: grid;
      grid-template-columns: 20rem 1fr;
      column-gap: 12rem;
    };

    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    };

    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-5);
    };

    .courses-btn {
      margin-bottom: 2rem;
      font-size: 2.5rem;
    };

    .courses-btn:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    };

    .course-description p {
      font-size: 2rem;
    };
  };
`
export default Courses;
