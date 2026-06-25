import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar'
import heroBg from "../assets/images/hero_image_4.jpg";
import { HiRocketLaunch } from "react-icons/hi2";
import '../styles/Hero.css'
import HowItWorks from '../components/home/HowItWorks';
import CareerDomain from '../components/home/CareerDomain';

const Home = () => {

  const navigate = useNavigate();
    
  return (

    <div>

      <div className="home-container" style = { { backgroundImage : `url(${heroBg})`,} } >
      
      <Navbar/>

            <div className="hero-container">

                <div className="hero-ai-badge">
                  <HiRocketLaunch />
                  <p>AI-Powered Career Intelligence Platform</p>
                </div>

                <div className="hero-header">
                  <h1>Transform Your Skills Into</h1>
                  <h1><span>Career Opportunities</span></h1>
                </div>

                <div className="hero-paragraph">
                  <p> Analyze your profile, identify skill gaps,</p>
                  <p> explore eligible companies, and get a personalized </p>
                  <p> roadmap to achieve your career goals.</p>
                </div>

            </div>


            <div className="hero-btn-container">

              <button  className="eligibility-btn" onClick={() => navigate('/eligibility')}>Check Eligibility</button>

              <button className="explore-btn">Explore Features</button>
              
            </div>
     

      </div>

      <HowItWorks/>

      <CareerDomain/>

            

      
    </div>
  )
}

export default Home