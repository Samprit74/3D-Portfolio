import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { animate, motion, stagger } from "motion/react"

const Speech = () => {
  return (
    <motion.div className='bubblecontainer'
     animate={{opacity:[0,1]}}
     transition={{duration:1}}>
      <div className="bubble">
        <TypeAnimation
          sequence={[
             1000,
            // Same substring at the start will only be typed out once, initially
            'Hii I an a passonate Softwear Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Looking for opportunites',
            1000,
            'To Cunnect with Industrial oppertunites',
            1000,
             'Pleasure to cunnect with you!!',
            1000,
             'Fill free to Explore',
            1000
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={66}
          omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src='/male.png' alt='/bussiness-man.png' />
    </motion.div>
  )
}

export default Speech
