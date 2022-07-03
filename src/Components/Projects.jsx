import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import pic1 from "../assets/pii.png";
import pic2 from "../assets/back.jpg";
import pic3 from "../assets/back.jpg";
import pic4 from "../assets/back.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import {getprojects} from "../data.js"

const getprg=getprojects()

const Project = ({ title, addresspic, skills }) => {

  return (
    <div className="project">
      <div className="img">
        <img src={process.env.PUBLIC_URL+addresspic} alt={title} />
        <div className="overlay">
          <ul>
            {skills.map((i)=>(
            <li >{i}</li> 

            ))}
            
          </ul>
        </div>
      </div>
      <div className="info">
        <h1>{title}</h1>
      
        <a  href="https://github.com/develarash/nuts_company_application" target="_blank"  className="gitsecton">
     
          <GitHubIcon fontSize="large" className="ic" />
          <span>Github source</span>
        </a>
      </div>
    </div>
  );
};

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
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="projects">

     <div className="searchInput">
      <SearchIcon/>
      <input 
      placeholder="Search prj"
       className=""
          type="text"
          value={searchParams.get("filter")||""}
          onChange={(e)=>{
            let filter=e.target.value;
            if(filter){
              setSearchParams({filter})
            }else{
              setSearchParams({});

            }
          }}
          /></div>
       
      <div className="flex-proj">
     
          {/* <Project
          name="calculator"
          img={pic1}
          desc="nodejs reactjs javascript"
        />
        <Project
          name="calculator"
          img={pic2}
          desc="nodejs reactjs javascript"
        />
        <Project
          name="calculator"
          img={pic3}
          desc="nodejs reactjs javascript"
        /> */}
        {
        getprg.filter((prg) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = prg.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
        .map((prg)=>(
          <Project title={prg.name} addresspic={prg.addImg} skills={prg.skills} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
