import React from 'react';
import '../../styles/Preview.css';
import { CheckSquare } from 'lucide-react';
import DashboardImage from '../../assets/images/preview_image.png'

const Preview = () => {

  return (

    <>

    <div  className="preview-container">
        
            <div className="preview-heading">
                <h1><span>Experience The Future</span> Of Career Planning</h1>

                <p>Nexora combines AI-driven analysis, eligibility tracking,<br></br>
                   skill assessment, and personalized career guidance into
                <br></br>one intelligent platform designed for students and graduates.</p>
                
            </div>

            <div className="preview-second-container">

              <div className="preview-first-box">

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

              </div>

              <div className="preview-second-box">
                 
                 <div className="second-box-image">
                 
                  <img src={DashboardImage}
                       alt="Nexora Dashboard Preview"
                       className="dashboard-preview-image"
                  />

                 </div>
                   
              </div>

            </div>

    </div>
    
    
    </>

  )
}

export default Preview