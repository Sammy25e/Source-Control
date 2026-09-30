import React from 'react'
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
     <Navbar/> 
     <Herosection/>
     <Analytics/>
     <Newsletter/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default App