import React from 'react'
import "../../styles/HowItWorks.css"
import { motion } from "framer-motion";

const HowItWorks = () => {

  return (
    
    <>

        <motion.section
                className="working-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
        >

            <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
            >

                <div className="working-badge">
            
                  Career Intelligence Process

                </div>

                <div className="working-heading">

                    <h2> Follow Four Smart Steps </h2>
                    <h2> To Unlock Your <span> Career Potential </span> </h2>

                </div>

            </motion.div>


            <div className="working-cards-container">

                <motion.div
                        className="step-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                >
                    <span>1</span>
                    <h1>Create Your Profile</h1>
                    <p>Enter your academic information,</p>
                    <p>technical skills, interests, and</p>
                    <p>preferred career domain.</p>

                </motion.div>

                <motion.div
                        className="step-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                >
                    <span>2</span>
                    <h1>Analyze Your Potential</h1>
                    <p>Our intelligent system evaluates</p>
                    <p>your strengths, identifies skill gaps,</p>
                    <p>and measures career readiness.</p>
                </motion.div>

                <motion.div
                    className="step-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                    }}
                >
                    <span>3</span>
                    <h1>Discover Opportunities</h1>
                    <p>Explore companies, industries,</p>
                    <p>and career paths that match</p>
                    <p>your profile and ambitions.</p>
                </motion.div>

                <motion.div
                    className="step-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                    }}
                >
                    <span>4</span>
                    <h1>Build Your Roadmap</h1>
                    <p>Receive personalized learning</p>
                    <p>recommendations and actionable</p>
                    <p>steps to achieve your goals.</p>

                </motion.div>

            </div>

        </motion.section>
    
    
    
    
    
    </>
    
  )
}

export default HowItWorks