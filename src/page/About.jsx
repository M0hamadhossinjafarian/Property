import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'

export default function About() {
    const [one, setone] = useState();
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => setone(data));
    }, []);
  return (
    <>
    <br /><br /><br /><br /><br />
    <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >

    <div className='About w-full gree bg-green-600 text-white flex flex-row'>
        <div className='flex flex-col w-96 text-center relative p-72 b mt-40 ml-40 h-52 border-2'>
            <h1 className='text-9xl absolute top-48 left-28 pl-5'>$3.7B</h1>
            <h2 className='text-2xl absolute top-80 left-56'>{one?.title.slice(0,15)}</h2>
        </div>
        <div className='flex flex-col flex-wrap pt-2 pl- font-bold lin'>
            <h2 className='border-2 p-2 pl-7  w-28 rounded-2xl border-white'>{one?.title.slice(0,8)}</h2>
            <h2 className=' mt-8 uuu text-5xl'>{one?.body.slice(0,50)}</h2>
         <button className='bg-white pt mt-16  text-black w-36 '>Post to property</button>

        </div>

    </div>
  </motion.div>
    </>
  )
}
