import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {

  return (
        
    <>
        <div className="navbar-container">
            
            
          
                  <motion.nav
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                  duration: 0.7,
                                  ease: "easeOut",
                              }}
                  > 

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
                        <NavLink to='/dashboard'>DASHBOARD</NavLink>
                        <NavLink to='/profile'>PROFILE</NavLink>
                        <NavLink>ABOUT</NavLink>

                    </div>

                    <div className="navbar-last">

                        <NavLink className="login-btn" to='/login'>Login</NavLink>
                        <NavLink className="signup-btn" to='/signup'>Sign up</NavLink>

                    </div>

                  </motion.nav>
            


        </div>
    </>
    
    
  )
}

export default Navbar