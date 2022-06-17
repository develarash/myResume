import React from 'react'
// import {  Link } from "react-router-dom";
import "../styles/navigation.css"
const Projects = () => {
  return (
    <div className="navigation">
        <div className='backgroundpic'>
        <img src={require("../assets/back.jpg")} />

        </div>
        <div className='profilepic'>
            {/* <img src={"../assets/i.jpg"} alt="s" /> */}
            <img src={require("../assets/i.jpg")} />


        </div>
 
    </div>
  )
}

export default Projects

