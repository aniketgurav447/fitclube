import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';



const Hero = () => {

  const transition = {type: 'spring', duration:3}
  const mobile = window.innerWidth<=768 ? true: false;
   return (
    <div className='hero' id='header'>
      <div className='blur' id='hero-blur'></div>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className='the-best-ad'>
          <motion.div
          initial={{left: mobile? "178px": "238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition, type: 'tween'}}
          >
          </motion.div>
          

          <span>the best fitness clube in the town</span>
        </div>

        {/* Hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>
        {/* figures */}

        <div className="figures">
          <div>
            <span>

              <NumberCounter end={140} start={100} delay='4' prefix="+"/>
            </span>
            <span>expert coachse</span>
          </div>
          <div>
            <span>
              
            <NumberCounter end={978} start={800} delay='4' prefix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              
            <NumberCounter end={50} start={0} delay='4' prefix="+"/>
            </span>
            <span>fitness progress</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>


      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div 
          transition={transition}
          whileInView={{right:'4rem'}}
          initial={{right:'-1rem'}}
          className='heart-rate'

        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
         <img src={hero_image} alt=""  className='hero-image'/>
         <img src={hero_image_back} alt="" className='hero-image-back'/>
         {/* calories */}
         <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>calories Burned</span>
            <span>220 kcal</span>

          </div>
         </div>

      </div>

    </div>
  )
}

export default Hero;
