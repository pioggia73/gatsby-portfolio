
import React from 'react';
import styled from 'styled-components';

// ****** components ****** //
import Layout from '../components/Layout';

const Contact = () => {
   return (
     <Wrapper>
       <Layout>
         <section className="contact-page section">
           <article className="contact-form">
             <h3>get in touch</h3>
             <form
               action="https://formspree.io/webdevelopermonika@gmail.com"
               method="POST"
               >
               <div className="form-group">
                 <input
                   type="text"
                   name="name"
                   placeholder=" your name"
                   className="form-control"
                   />
                 <input
                   type="email"
                   name="email"
                   placeholder=" your email"
                   className="form-control"
                   />
                 <textarea
                   name="your message"
                   rows="5"
                   placeholder="your message here"
                   className="form-control"
                   />
               </div>
               <button type="submit" className=" btn submit-btn">
                 submit here
               </button>
             </form>
           </article> 
         </section>
       </Layout>
     </Wrapper>
   )
};

const Wrapper = styled.section`
  .contact-page {
    display: flex;
    /* place-items: center; */
    height: 100vh;
    margin-top: -5rem;
    justify-content:center;
    align-items: center;
  };

  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    margin: 0 auto;
  };

  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  };

  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  };

  .form-group {
    padding: 1rem 1.5rem;
  };

  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
  }

  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  };

  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  };
`

export default Contact;
