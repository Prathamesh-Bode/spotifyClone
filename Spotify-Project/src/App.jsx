import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Slidebar from './components/slidebar/Slidebar.jsx'
import MainSection from './components/mainSection/MainSection.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  

  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Slidebar />
          <MainSection />
        </div>
         <Footer/>
      </div>
    </>
  )
}

export default App
