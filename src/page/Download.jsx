import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'

export default function Download() {
    const [one, setone] = useState();
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => setone(data));
    }, []);
  return (
    <>
    <br /><br /><br />
    <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >

    <div className='w-full h-d flex flex-row don'>
<div className='flex flex-col '>
<h2 className=" mt-40  ml-44 text-center text-lg font-semibold text-main border-2 border-main w-52  p-2 rounded-2xl ">
            {one?.title.slice(0, 22)}
          </h2>
          <h1 className="  pt-10 font-bold text-4xl pl-44 d">
            {one?.body.slice(0,80)}
          </h1>
          <div className='flex ml-44 mt-10 wr'>
          <img className='w-36' src="https://assets-global.website-files.com/64e47db3c5d72fe1a98c0a2d/64e4b94dd9fb00f27e0a675e_Apple%20Store%20Badge.png" alt="" />
<          img className='w-36 ml-7' src="https://assets-global.website-files.com/64e47db3c5d72fe1a98c0a2d/64e4b94dd9fb00f27e0a675c_Google%20Store%20Badge.png" alt="" />
</div></div>
<img className=' ml-20   w-i' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b8c6d27506a6fcd8fb02_Mockup-p-800.jpg" alt="" />

    </div>
    </motion.div>
    </>
  )
}
