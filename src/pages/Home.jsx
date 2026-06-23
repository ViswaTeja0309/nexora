import React from 'react'
import Navbar from '../components/common/Navbar'
import heroBg from "../assets/images/hero_image_4.jpg";
import '../styles/Hero.css'

const Home = () => {
    
  return (

    <div>

      <div

          className="home-container"
          style = { { backgroundImage : `url(${heroBg})`,} }
      >
      
      <Navbar/>

      
     <h1>viswa teja</h1>
      
        
      </div>

      
      
    </div>
  )
}

export default Home