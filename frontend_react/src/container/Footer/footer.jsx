import React,{useState} from 'react';

import { image } from '../../constant';

import { AppWrap,MotionWrap } from '../../wrapper';
import {client} from '../../client'
import './footer.scss'

const Footer = () => {
    const [formData, setformData] = useState({name:'',email:'',message:''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

   const {name,email,message} = formData;

   const handleChangeInput = (e) =>{
     const{name, value} = e.target;

     setformData({...formData, [name]: value});

   };

   const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };



  return (
   <>
    <h2 className='head-terxt'>Connect & Chat With Me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
         <img src = {image.email} alt = 'email'/>
         <a href="mailto:ashray928@gmail.com" className='p-text'>ashray928@gmail.com</a>
      </div>
    </div>
  {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name = 'name' value = {name} onChange = {handleChangeInput}/>

        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your email' name = 'email' value = {email} onChange = {handleChangeInput}/>

        </div>
        <div>
          <textarea className='p-text' placeholder='Your message' value = {message} name = 'message' onChange={handleChangeInput}/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading? 'Sending': 'Send Message'}</button>

      </div>
      :<div>
        <h3 className='head-text'>Thank you for getting it touch</h3>
      </div>}
   </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
