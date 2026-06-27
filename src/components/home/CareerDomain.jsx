import React from 'react'
import "../../styles/CareerDomain.css";
import { Code2, BrainCircuit, BarChart3, ShieldCheck, Cpu, Microchip } from "lucide-react"; 
import { motion } from "framer-motion";

const CareerDomain = () => {

  return (

    <>
      
      <div className="career-section-container">

            <div className="career-bage">
                Explore Career Domains
            </div>

            <motion.div
                    className="career-heading"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
            >
                <h2>Find The <span>Career Path</span></h2>
                <h2>That Matches Your Potential</h2>

            </motion.div>

            <div className="career-card-container">

                <motion.div
                        className="career-card"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }}
                >

                    <div className="career-icon-heading">
                    <span><Code2 /></span>
                     <h2>Software Development</h2>
                    </div>

                    <div className="carrer-pargraph">

                     <p>Build modern web applications,</p>
                     <p>mobile apps, and scalable software solutions.</p>
                    </div>

                </motion.div>

                <motion.div
                    className="career-card"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2
                    }}
                >

                    <div className="career-icon-heading">
                         <span><BrainCircuit /></span>
                         <h2>Artificial Intelligencet</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                         <p>Work with machine learning,</p>
                         <p>automation, and intelligent systems.</p>
                    </div>
                </motion.div>

                <motion.div
                    className="career-card"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3
                    }}
                >

                    <div className="career-icon-heading">
                     <span><BarChart3 /></span>
                     <h2>Data Science</h2>
                    </div>

                    <div className="carrer-pargraph">

                     <p>Transform raw data into</p>
                     <p>valuable insights and business decisions.</p>
                     </div>

               </motion.div>

                <motion.div
                        className="career-card"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.4
                        }}
                >

                    <div className="career-icon-heading">
                     <span><ShieldCheck /></span>
                     <h2>Cyber Security</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Protect digital systems,</p>
                     <p>networks, and sensitive information.</p>
                     </div>
                </motion.div>

                <motion.div
                        className="career-card"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5
                        }}
                >

                    <div className="career-icon-heading">
                     <span><Cpu /></span>
                     <h2>Embedded Systems</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Develop hardware-integrated software</p>
                     <p>for smart devices and automation.</p>
                     </div>
                </motion.div>

                <motion.div
                    className="career-card"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6
                    }}
                >

                    <div className="career-icon-heading">
                     <span><Microchip /></span>
                     <h2>VLSI Design</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Design advanced semiconductor</p>
                     <p>chips and integrated circuits.</p>
                     </div>
                </motion.div>

            </div>
      </div>
    
    
    
    </>

  )
}

export default CareerDomain