import React from "react";
import {motion} from 'framer-motion'

export default function Box() {
  return (


  <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} className="w-full min-h-80 text-white box">
    <div className='flex flex-row flex-wrap pl-40 '>
          <input className='mt-8 border-2 border-maingrey p-7 pb-5 pl-8  w--  rounded-2xl text-maingrey'placeholder='Enter your email...' type="text" />
         <button type="text" className='svg- rounded-xl mt-10 absolute bg-main mmm p-5 '>Search</button>
                   <button className="text-maingrey  w-48 ml-20 mt-10  h-20 border-2 border-maingrey ">Location</button>
                   <button className="text-maingrey  w-48 ml-10 mt-10  h-20 border-2 border-maingrey ">Category</button>
                   <button className="text-maingrey  w-48 ml-10 mt-10  h-20 border-2 border-maingrey ">Type</button>


          </div>
          <div>
          </div>
          <br /><br /><br /><br />
          <br /><br />


  </motion.div>
  )
}
