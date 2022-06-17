import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"
const Projects = () => {
    let activeStyle = {
     
        color:"white"
        
      };
    
      let activeClassName = "red";
  return (
    <div className="navigation">
    <nav>
      <ul className='ul-navigation'>
        
        <li className='li'>
          <NavLink
            to="Exprience"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Exprience
          </NavLink>
        </li>
     <li className='li'>
     <NavLink
            to="Projects"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Projects
          </NavLink>
     </li>
     <li className='li'>
     <NavLink
            to="Educatios"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Educatios
          </NavLink>
     </li>
     <li className='li'>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
 
    </div>
  )
}

export default Projects

