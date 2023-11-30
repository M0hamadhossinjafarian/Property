import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'

export default function Email() {
    const [one, setone] = useState();
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => setone(data));
    }, []);
  return (
    <>
          <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >

    <div className='w-full relative min bg-green-600 text-white flex flex-col justify-center alin '>
    <h2 className=" mt-10  text-center text-lg font-semibold - border-2 border-white w-36  p-2 rounded-2xl ">
            {one?.title.slice(0, 12)}
          </h2>
          <h1 className=" h text-left pt-10 font-bold text-5xl  ">
            {one?.body.slice(0,48)}
          </h1>
          <h1 className='pt-14'>
          {one?.body.slice(0,43)}
          </h1>
          <div className='flex flex-row  '>
          <input className='w--- mt-8 p-7 pb-5 pl-8  w--  rounded-full text-maingrey'placeholder='Enter your email...' type="text" />
         <input type="text" className='svg-1 rounded-full mt-10 absolute bg-main ml' />
         
          </div>
<h1 className='pt-6'>
          {one?.body.slice(0,43)}
          </h1>
          <img src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/650aecc6785676a1148c1157_wave-haikei%20(3).svg" alt="" />
   </div>
   </motion.div>
    </>
  )
}
