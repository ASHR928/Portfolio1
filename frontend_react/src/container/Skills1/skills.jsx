import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor ,client } from '../../client';



import './skills.scss'
const Skills = () => {

  const[skills,setskills] = useState([]) 

  useEffect (()=>{
    const skillsquery = '*[_type == "skills"]';
    
    client.fetch(skillsquery)
      .then((data)=>{
        setskills(data);
      })


  },[])



  return (
    <>
      <h2 className='head-text'>Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className='app__skills-item app__flex'
            key={skill.name}
            
            >
           <div className='app__flex' style={{background:skill.bgColor}}>
             <img src = {urlFor(skill.icon)}  alt = {skill.name}/>
           </div>
           <p className= "p-text">{skill.name}</p>

            </motion.div>

          ))}
        </motion.div>

      </div>
    
    </>
  )
}


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
