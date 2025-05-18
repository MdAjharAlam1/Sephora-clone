import React from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import Footer from '../../pages/Footer'

const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  ) 
}

export default MainLayout
