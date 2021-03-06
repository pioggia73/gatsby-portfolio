import React from 'react';
// ***** components ***** //
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {

   const [isOpen, setIsOpen] = React.useState(false);
   const toggleSidebar = () => {
      setIsOpen(!isOpen)
   };

   return (
      <>
         <Navbar toggleSidebar={toggleSidebar} />
         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
         <Footer />   
      </>
   )
 };


export default Layout;
