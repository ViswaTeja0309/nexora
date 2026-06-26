import React from 'react'
import "../../styles/CareerDomain.css";
import { Code2, BrainCircuit, BarChart3, ShieldCheck, Cpu, Microchip } from "lucide-react"; 

const CareerDomain = () => {

  return (

    <>
      
      <div className="career-section-container">

            <div className="career-bage">
                Explore Career Domains
            </div>

            <div className="career-heading">
                <h2>Find The <span>Career Path</span></h2>
                <h2>That Matches Your Potential</h2>
            </div>

            <div className="career-card-container">

                <div className="career-card">

                    <div className="career-icon-heading">
                    <span><Code2 /></span>
                     <h2>Software Development</h2>
                    </div>

                    <div className="carrer-pargraph">

                     <p>Build modern web applications,</p>
                     <p>mobile apps, and scalable software solutions.</p>
                    </div>

                </div>

                <div className="career-card">

                    <div className="career-icon-heading">
                         <span><BrainCircuit /></span>
                         <h2>Artificial Intelligencet</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                         <p>Work with machine learning,</p>
                         <p>automation, and intelligent systems.</p>
                    </div>
                </div>

                <div className="career-card">

                    <div className="career-icon-heading">
                     <span><BarChart3 /></span>
                     <h2>Data Science</h2>
                    </div>

                    <div className="carrer-pargraph">

                     <p>Transform raw data into</p>
                     <p>valuable insights and business decisions.</p>
                     </div>

                </div>

                <div className="career-card">

                    <div className="career-icon-heading">
                     <span><ShieldCheck /></span>
                     <h2>Cyber Security</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Protect digital systems,</p>
                     <p>networks, and sensitive information.</p>
                     </div>
                </div>

                <div className="career-card">

                    <div className="career-icon-heading">
                     <span><Cpu /></span>
                     <h2>Embedded Systems</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Develop hardware-integrated software</p>
                     <p>for smart devices and automation.</p>
                     </div>
                </div>

                <div className="career-card">

                    <div className="career-icon-heading">
                     <span><Microchip /></span>
                     <h2>VLSI Design</h2>
                    </div>
                    
                    <div className="carrer-pargraph">
                     <p>Design advanced semiconductor</p>
                     <p>chips and integrated circuits.</p>
                     </div>
                </div>

            </div>
      </div>
    
    
    
    </>

  )
}

export default CareerDomain