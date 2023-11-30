import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'

export default function Blog() {
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

    <div className='blog w-full min-h-80 text-center flex flex-col '>
        
    <h2 className=" mt-40 ml- text-center text-lg font-semibold text-main border-2 border-main w-36  p-2 rounded-2xl ">
            {one?.title.slice(0, 12)}
          </h2>
          <h1 className="  pt-10 font-bold text-4xl text-center ">
            {one?.body.slice(0,20)}
          </h1>
          <div className='flex flex-row flex-wrap mt-24'>
<div className='flex fb flex-col w-1/4 h-68 ml-36'>
<img className='w-full rounded-xl ' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512c2b0968c445dcceef05d_blog-2.jpg" alt="" />

<h2 className=" mt-9   text-lg font-semibold text-main border-2 border-main w-44 text-left  p-2 rounded-2xl ">
            {one?.title.slice(0, 18)}
          </h2>
          <h1 className="  pt-5 font-bold text-3xl  text-left  ">
            {one?.body.slice(0,20)}
          </h1>
          <button className='text-left mt-5 text-lg  border-b-2 border-main w-24  font-semibold text-main'>Read more</button>
</div>
<div className='flex fb flex-col w-1/4 h-68 ml-14'>
<img className='w-full rounded-xl ' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512c2bdcd2cff4a76e672a9_blog-1.jpg" alt="" />

<h2 className=" mt-9  text-left  text-lg font-semibold text-main border-2 border-main w-44  p-2 rounded-2xl ">
            {one?.title.slice(0, 18)}
          </h2>
          <h1 className="  pt-5 font-bold text-3xl  text-left  ">
            {one?.body.slice(0,20)}
          </h1>
          <button className='text-left mt-5 text-lg  border-b-2 border-main w-24  font-semibold text-main'>Read more</button>
</div>
<div className='flex fb flex-col w-1/4 h-68 ml-14'>
<img className='w-full rounded-xl ' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512c2c9fb2887c0bdbe1150_blog-3.jpg" alt="" />

<h2 className=" mt-9 text-left  text-lg font-semibold text-main border-2 border-main w-44  p-2 rounded-2xl ">
            {one?.title.slice(0, 18)}
          </h2>
          <h1 className="  pt-5 font-bold text-3xl  text-left  ">
            {one?.body.slice(0,20)}
          </h1>
          <button className='text-left mt-5 text-lg  border-b-2 border-main w-24  font-semibold text-main'>Read more</button>
</div>
          </div>
    </div>
    <br /><br />
    </motion.div>
    </>
  )
}
