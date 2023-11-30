import React, { useEffect, useState } from "react";
import Box from "./Box";
import Card1 from "./Card1";
import Category from "./Category";
import P from "./P";
import About from "./About";
import Slider from "./Slider";
import Download from "./Download";
import Blog from "./Blog";
import Email from "./Email";
import Footer from "../Component/Footer";
import { motion } from "framer-motion";

export default function Homepage1() {
  const [one, setone] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setone(data));
  }, []);
  return (
    <>
      <br />
      <motion.div initial={{y:200,opacity:0}} transition={{delay:0.5,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >
    
   
      <div className="banner w-full text-lg">
        <div className=" bann text-white flex flex-col pl-44 pt-10 font-semibold">
          <h2 className="border-2 width p-2 rounded-2xl text-base">
            {one?.body.slice(0, 25)}
          </h2>
          <h1 className="pt-10 text-7xl w">{one?.title.slice(0, 32)}</h1>
          <h2 className="pt-12 font-medium wo">{one?.title.slice(30, 72)}</h2>
          <button className="bg-main p-2 text-center ma mt-10 ">
            {" "}
            post a property
          </button>
          <br />
        </div>
    <img className="im"  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/650aecc6785676a1148c1157_wave-haikei%20(3).svg" alt="" />

      </div>
      <br />
      <Box />
      <Card1 />
      <Category />
      <P />
      <About/>
      <Slider/>
      <Download/>
      <Blog/>
      <Email/>
      <Footer/>
      </motion.div>
    </>
  );
}
