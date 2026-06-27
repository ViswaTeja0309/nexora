import React from 'react'
import "../../styles/Footer.css"

const Footer = () => {

  return (

    <div className="footer-container">

        <div className="footer-top-section">

            <div className="footer-logo">

                    <div className="logo-symbol">
                        ◢◣
                    </div>

                    <div className="navbar-logo">
                        NEXORA
                    </div>

            </div>

            <div className="footer-heading">

                <p>Empowering students with AI-driven career insights,<br></br>
                   eligibility analysis, personalized learning paths,
                <br></br>and smarter career decisions.</p>
            </div>

        </div>


        <div className="footer-middile-section">

            <div className="first-list">
                <h4>Quick Links</h4>

                <div className="links-p-style">
                <p>Home</p>
                <p>How It Works</p>
                <p>Career Domains</p>
                <p>Dashboard</p>
                </div>
            </div>

            <div className="second-list">
                <h4>Resources</h4>

                <div className="resorces-p-style">
                <p>Eligibility Checker</p>
                <p>Profile</p>
                <p>Login</p>
                <p>Sign Up</p>
                </div>
            </div>

            <div className="third-list">
                <h4>Contact</h4>

                <div className="contact-p-style">
                <p>support@nexora.ai</p>
                <p>Andhra Pradesh, India</p>
                </div>
            </div>

        </div>

        <div className="footer-last-section">
            <p>Built to simplify career planning for everyone. |</p>
            <p>© 2026 Nexora. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer