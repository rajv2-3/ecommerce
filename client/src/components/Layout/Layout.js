import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Helmet} from "react-helmet";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Layout=({children,title,description,keywords,author})=>{
    return (
        <div>
            <Helmet>
            
  <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />


                <title>{title}</title>
                
            </Helmet>
           <Header/>
           <main style={{ minHeight: "70vh" }}>
           <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
            {children}</main>
      <Footer />
        </div>
    );
};

Layout.defaultProps={
    title:'Ecommerce app-shop now',
    description:'mern stack project'
    ,
    keywords:'mern,react,mongoDB',
    author:'Dhananjay Maurya',
};

export default Layout;