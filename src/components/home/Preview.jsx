import React from 'react';
import '../../styles/Preview.css';
import { CheckSquare } from 'lucide-react';
import DashboardImage from '../../assets/images/preview_image.png';
import { motion } from "framer-motion";

const Preview = () => {

  return (

    <>

    <div  className="preview-container">
        
            <motion.div
                    className="preview-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
            >
                <h1><span>Experience The Future</span> Of Career Planning</h1>

                <p>Nexora combines AI-driven analysis, eligibility tracking,<br></br>
                   skill assessment, and personalized career guidance into
                <br></br>one intelligent platform designed for students and graduates.</p>
                
            </motion.div>

            <div className="preview-second-container">

              <motion.div
                  className="preview-first-box"
                  initial={{ opacity: 0, x: -70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: "easeOut"
                  }}
              >

                <div className="preview-check-list-container">
                    <CheckSquare className="check-icon"/>
                    <h4>Personalized Career Dashboard</h4>
                </div>

                <div className="preview-check-list-container">
                    <CheckSquare className="check-icon"/>
                    <h4>AI-Powered Eligibility Analysis</h4>
                </div>

                <div className="preview-check-list-container">
                    <CheckSquare className="check-icon" />
                    <h4>Skill Gap Identification</h4>
                </div>

                <div className="preview-check-list-container">
                  <CheckSquare className="check-icon"/>
                  <h4>Actionable Career Roadmap </h4>
                </div>

              </motion.div>

              <motion.div
                    className="preview-second-box"
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: "easeOut"
                    }}
              >
                 
                <motion.div
                        className="second-box-image"
                        whileHover={{
                            scale: 1.02,
                            y: -6
                        }}
                        transition={{
                            duration: 0.3
                        }}
                >
                 
                  <img src={DashboardImage}
                       alt="Nexora Dashboard Preview"
                       className="dashboard-preview-image"
                  />

                </motion.div>
                   
              </motion.div>

            </div>

    </div>
    
    
    </>

  )
}

export default Preview