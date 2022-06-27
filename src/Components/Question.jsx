import React, { useState } from 'react'
import "../styles/questions.css"
const Question = () => {
const data=[
    {
        question:"Tell me about yourself ؟",
        answer:"My interest in software and application development was formed as a teenager when I was studying in the software school, and then I tried to develop my personal abilities as a full-stack developer."
    },
    {
        question:"Why should we hire you?",
        answer:"As a front-end and back-end developer, I do my best to develop and implement the company's needs."
    },
    {
        question:"Why do you want to work here?",
        answer:"According to your needs, I have the ability to implement the services provided by you, and in addition to the development of the company, I want to develop my capabilities in the field of developing large applications."
    },

]
const [selected,setSelected]=useState(null)
const toggle=(i)=>{
 
    if(selected===i){
        return setSelected(null)
    }
setSelected(i)}
  return (
    <div>
        <div className='accordion'>
    {data.map((item,i)=>(
    <div className='item' key={i}>
        <div  className={selected===i?"title red":"title white"} onClick={()=>toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected === i ? "-":"+"}</span>
        </div>
        <div className={selected===i? "content show":"content"}>
            
            {item.answer}
        </div>
    </div>
    ))}
        </div>
    </div>
  )
}

export default Question;
