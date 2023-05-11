import React, { useRef } from 'react'
import  './Join.css'
import emailjs from 'emailjs-com'

const Join = () => {
    const form = useRef()

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gcqgzf9', 'template_6bm4pke', form.current, '3zEvrkGWGP7oGW3-6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Join' id="Join-us">
        <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span> LEVEL UP</span>
            </div>
            <div>
               <span> YOUR  BODY </span>
               <span className='stroke-text'>WITH US?</span>
            </div>
        </div>

        <div className='right-j'>

            <form ref={form} className='email-container' onsubmit={sendEmail}>
               <input type="email"  name='user_email' placeholder='Enter your Email address'/>
               <button className='btn btn-j'>Join now</button>
            </form>


        </div>
      
    </div>
  )
}

export default Join;
