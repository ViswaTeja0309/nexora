import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/Navbar.css";

const Navbar = () => {

  return (
        
    <>
        <div className="navbar-container">
            
            <div className="page-wraper">
          
                  <nav>

                    <div className="logo-container">

                      <div className="logo-symbol">
                        ◢◣
                      </div>

                      <div className="navbar-logo">
                          NEXORA
                    </div>

                    </div>


                    <div className="navbar-middle">

                        <NavLink to='/'>HOME</NavLink>
                        <NavLink>ABOUT</NavLink>
                        <NavLink>FEATURES</NavLink>

                    </div>

                    <div className="navbar-last">

                        <NavLink className="login-btn" to='/login'>Login</NavLink>
                        <NavLink className="signup-btn" to='/signup'>Sign up</NavLink>

                    </div>

                  </nav>

        </div>

           
            


        </div>
    </>
    
    
  )
}

export default Navbar