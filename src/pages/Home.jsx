import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar'
import heroBg from "../assets/images/hero_image_4.jpg";
import { HiRocketLaunch } from "react-icons/hi2";
import '../styles/Hero.css'
import HowItWorks from '../components/home/HowItWorks';
import CareerDomain from '../components/home/CareerDomain';
import Preview from '../components/home/Preview';
import Footer from '../components/common/Footer';
import { motion } from "framer-motion";

const Home = () => {

  const navigate = useNavigate();
    
  return (

    <div>

      <div className="home-container" style = { { backgroundImage : `url(${heroBg})`,} } >
      
      <Navbar/>

            <div className="hero-container">

                <motion.div
                        className="hero-ai-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                >

                    <HiRocketLaunch />
                    <p>AI-Powered Career Intelligence Platform</p>

                </motion.div>

                <motion.div
                        className="hero-header"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut",
                        }}
                >
                  <h1>Transform Your Skills Into</h1>
                  <h1><span>Career Opportunities</span></h1>

                </motion.div>

                <motion.div
                      className="hero-paragraph"
                      initial={{ opacity: 0, y: 35 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                          duration: 0.8,
                          delay: 0.6,
                          ease: "easeOut",
                      }}
                >
                  <p> Analyze your profile, identify skill gaps,</p>
                  <p> explore eligible companies, and get a personalized </p>
                  <p> roadmap to achieve your career goals.</p>

                </motion.div>

            </div>


              <motion.div
                      className="hero-btn-container"
                      initial={{ opacity: 0, y: 35 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                          duration: 0.8,
                          delay: 0.8,
                          ease: "easeOut",
                      }}
              >

              <button  className="eligibility-btn" onClick={() => navigate('/eligibility')}>Check Eligibility</button>

              <button className="explore-btn">Explore Features</button>
              
            </motion.div>
     

      </div>

      <HowItWorks/>

      <CareerDomain/>

      <Preview/>

      <Footer/>

            

      
    </div>
  )
}

export default Home