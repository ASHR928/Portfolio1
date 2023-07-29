import React from 'react';
import {BsTwitter} from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter/>
      </div>
      <div>
        <FaLinkedin/>
      </div>
      <div>
        <FaGithub/>
      </div>
    </div>
  )
}

export default Socialmedia
