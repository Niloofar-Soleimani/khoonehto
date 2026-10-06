  import React from 'react'
import Header from '../modules/Header';
import Footer from '../modules/footer';
  
  export default function Layout({children}) {
    return (
      <>
        <div className="flex flex-col">
          <Header />
        </div>

        <main className="flex-1">{children}</main>
        <div>
          <Footer />
        </div>
      </>
    );
  }
  