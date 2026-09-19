  import React from 'react'
import Header from '../modules/Header';
import Footer from '../modules/footer';
  
  export default function Layout({children}) {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
  