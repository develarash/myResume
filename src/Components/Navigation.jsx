import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"
const Navigation = () => {
    let activeStyle = {
     
        color:"white"
        
      };
      let activeClassName = "red";
      const linkNavigation=[{address:"/" ,name:"Home"},{address:"Exprience" ,name:"Exprience"},{address:"Projects" ,name:"Projects"},{address:"questions" ,name:"questions ?"}]
  return (
    <div className="navigation">
      <div>
        
      </div>
    <nav>
      <ul className='ul-navigation'>
        {linkNavigation.map((elem,index)=>(
 <li className='li' key={index}>
 <NavLink
   to={elem.address}
   style={({ isActive }) =>
     isActive ? activeStyle : undefined
   }
 >
   {elem.name}
 </NavLink>
</li>
        ))}
       
      </ul>
    </nav>
 
    </div>
  )
}

export default Navigation

