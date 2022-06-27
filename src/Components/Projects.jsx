import React, { useEffect, useState } from 'react'
import "../styles/Projects.css";
import pic1 from "../assets/back.jpg"
import pic2 from "../assets/back.jpg"
import pic3 from "../assets/back.jpg"
import pic4 from "../assets/back.jpg"

import axios from "axios"
const Project=({name,img,desc})=>{
  return(
    <div className='project'>
      <div className='img'>
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
      <div className='skills'>
        <span>skills : </span>
        <span>nodejs </span>
        <span>reactjs</span>
        <span>javaScript</span>
      </div>
    </div>
  )
}

const Projects = () => {
//   const [data, setData] = useState("");

// const getData=async()=>{
//   const res=await axios.get(
//     "https://github.com/develarash/Mydata/blob/main/Resume_data.json"
//   );
//   setData(res.data);
//   console.log(res.data)

// }
// useEffect(()=>{
//   getData();
// },[]);


  return (
    <div className='projects'>
      
      <Project name="calculator" img={pic1} desc="nodejs reactjs javascript"  />
      <Project name="calculator" img={pic1} desc="nodejs reactjs javascript"  />
      <Project name="calculator" img={pic1} desc="nodejs reactjs javascript"  />

    </div>
  )
}

export default Projects