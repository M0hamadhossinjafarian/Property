import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'
export default function Category() {
  const [one, setone] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setone(data));
  }, []);
  return (
    <>
      <br />
      <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >

      <div className="w-full  min-h-96 photo pt-5 cat">
        <h2 className="text-white font-bold text-4xl pt-20 text-center">
          {one?.title.slice(0, 20)}
        </h2>
        <div className="flex flex-row  flex-wrap justify-center mr-28">
          <div className=" ml-40 mt-14 bg-white rounded-xl w-64 h-60 text-center align pt-5 ">
            <img
              className=" w-28 h-28 ml-20  border-2 p-7 padding text-center "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512a9ee3666b95695ad0eb3_icons8-building-240.png"
              alt=""
            />
            <h2 className="text-center pt-5 pl-2 text-2xl ">
              {one?.title.slice(0, 5)}
            </h2>
          </div>
          <div className=" ml-16 mt-14 bg-white rounded-xl w-64 h-60 text-center align pt-5 ">
            <img
              className=" w-28 h-28 ml-20  border-2 p-7 padding text-center "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512a96e925234514d7d2485_icons8-floor-plan-240.png"
              alt=""
            />
            <h2 className="text-center pt-5 pl-2 text-2xl  ">
              {one?.title.slice(5, 9)}
            </h2>
          </div>
          <div className=" ml-16 mt-14 bg-white rounded-xl w-64 h-60 text-center align pt-5 ">
            <img
              className=" w-28 h-28 ml-20   border-2 p-7 padding text-center "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512a96692b0b85de85c0bd0_icons8-sofa-240.png"
              alt=""
            />
            <h2 className="text-center pt-5 pl-2 text-2xl ">
              {one?.title.slice(10, 14)}
            </h2>
          </div>
          <div className=" ml-16 mt-14 bg-white rounded-xl w-64 h-60 text-center align pt-5 ">
            <img
              className=" w-28 h-28 ml-20  border-2 p-7 padding text-center "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6512a9e3adf37662a6071c94_icons8-house-240.png"
              alt=""
            />
            <h2 className="text-center pt-5 pl-2 text-2xl">
              {one?.title.slice(15, 25)}
            </h2>
          </div>
        </div>
    <img   src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/650aecc6785676a1148c1157_wave-haikei%20(3).svg" alt="" />

      </div>
      </motion.div>
    </>
  );
}
