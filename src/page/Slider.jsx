import React,{useState,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
import {motion} from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function App() {
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

    <div className='w-full min-h-96'>
    <span className="flex flex-col text-center pt-10">
          <h2 className=" text-center text-lg font-semibold text-main border-2 border-main w-52 lef p-2 rounded-2xl ">
            {one?.body.slice(0, 22)}
          </h2>
          <h1 className=" text-center pt-10 font-bold text-5xl">
            {one?.title.slice(0, 30)}
          </h1>
        </span>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

        modules={[Pagination,Autoplay]}
        className="mySwiper pt-44 h-36"
      >
        <SwiperSlide><div className='flex flex-col pl-6 border-2 sliw '>
            <div className='pt-5 flex flex-row'>
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
          
            </div>
            <h2  className=' pt-5 text-maingrey  text-lg text-left '>"{one?.body.slice(0,100)}"</h2>
            <h2 className=' pt-8 font-bold text-lg text-left '>{one?.title.slice(0,30)}</h2>
            </div></SwiperSlide>
            <SwiperSlide><div className='flex flex-col pl-6 border-2 sliw '>
            <div className='pt-5 flex flex-row'>
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
          
            </div>
            <h2  className=' pt-5 text-maingrey  text-lg text-left '>"{one?.body.slice(0,100)}"</h2>
            <h2 className=' pt-8 font-bold text-lg text-left '>{one?.title.slice(0,30)}</h2>
            </div></SwiperSlide>
            <SwiperSlide><div className='flex flex-col pl-6 border-2 sliw '>
            <div className='pt-5 flex flex-row'>
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
          
            </div>
            <h2  className=' pt-5 text-maingrey  text-lg text-left '>"{one?.body.slice(0,100)}"</h2>
            <h2 className=' pt-8 font-bold text-lg text-left '>{one?.title.slice(0,30)}</h2>
            </div>
            </SwiperSlide>      <SwiperSlide><div className='flex flex-col pl-6 border-2 sliw '>
            <div className='pt-5 flex flex-row'>
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
          
            </div>
            <h2  className=' pt-5 text-maingrey  text-lg text-left '>"{one?.body.slice(0,100)}"</h2>
            <h2 className=' pt-8 font-bold text-lg text-left '>{one?.title.slice(0,30)}</h2>
            </div></SwiperSlide>
            <SwiperSlide><div className='flex flex-col pl-6 border-2 sliw '>
            <div className='pt-5 flex flex-row'>
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
            <img className='w-5' src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512b4759acfa283ffda3f4d_star.png" alt="" />
          
            </div>
            <h2  className=' pt-5 text-maingrey  text-lg text-left '>"{one?.body.slice(0,100)}"</h2>
            <h2 className=' pt-8 font-bold text-lg text-left '>{one?.title.slice(0,30)}</h2>
            </div></SwiperSlide>     
      </Swiper>
      </div>
      </motion.div>
    </>
  );
}