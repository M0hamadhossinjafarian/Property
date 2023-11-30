import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Card1() {
  const [one, setone] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setone(data));
  }, []);
  const [price, setprice] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setprice(data));
  }, []);
  return (
    <>
      <br />
      <motion.div initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >
      <h2 className=" text-lg font-semibold text-main border-2 border-main w-52 m-auto p-2 rounded-2xl ">
          {one?.body.slice(0, 22)}
        </h2>
        <h1 className="pt-10 font-bold text-5xl m-auto r-1">{one?.title.slice(0, 30)}</h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className=" card h-card w-full flex flex-row flex-wrap ">
<div className="w-card hh-card ml-32 border border-maingrey">
  <img src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/65129e844a993ce9630d67fd_listing-2-p-800.jpg" className="hi-c w-full" alt="" />
<div className="flex flex-col ml-14 lee">
<h2 className="text-main text-3xl font-sans font-semibold  mt-8">${price?.price}/Mo</h2>
<div className="flex flex-row mt-6 icon flex-wrap">
<div className="flex flex-row text-main">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>

<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>


<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>

<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>
</div>
<h2 className="text-xl font-bold mt-5">{one?.body.slice(0, 20)}</h2>
<h2 className="text-base font-bold mt-5 text-maingrey">{one?.body.slice(20, 40)}</h2>

</div>

</div>

<div className="w-card hh-card ml-16 border border-maingrey">
  <img src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6511a04329b7d448d12eb98b_listing-1-p-800.jpg" className="hi-c w-full" alt="" />
  <div className="flex flex-col ml-14 lee">
<h2 className="text-main text-3xl font-sans font-semibold  mt-8">${price?.price}/Mo</h2>
<div className="flex flex-row mt-6 icon flex-wrap">
<div className="flex flex-row text-main">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>

<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>


<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>

<div className="flex flex-row text-main ml-8">
  <img className="h-7" src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png" alt="" />
  <h2 className="ml-2 text-lg">2</h2>
  <h2 className="ml-2 text-lg">Bed</h2>
</div>
</div>
<h2 className="text-xl font-bold mt-5">{one?.body.slice(0, 20)}</h2>
<h2 className="text-base font-bold mt-5 text-maingrey">{one?.body.slice(20, 40)}</h2>

</div>

</div>
</div>

      </motion.div>
      <br /><br />
    </>
  );
}






      {/* <div className="card   w-full hh text-center flex flex-col flex-wrap ">
        <h2 className=" text-lg font-semibold text-main border-2 border-main w-52 lef p-2 rounded-2xl ">
          {one?.body.slice(0, 22)}
        </h2>
        <h1 className="pt-10 font-bold text-5xl r-1">{one?.title.slice(0, 30)}</h1>
        <div className="flex pt-20 flex-wrap  ">
          <div className="relative ww r-3 flex flex-col w-2/4   ">
            <img
              className=" c-b ml-48"
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/65129e844a993ce9630d67fd_listing-2-p-800.jpg"
              alt=""
            />
            <div className="absolute top-96 left-10 ">
              <div className=" pr-44 pt-7 absolute r-4">
                <h3 className="text-main  text">${price?.price}/Mo</h3>
                <div className="pl-40  pt-3 flex flex-row ">
                  <div className="flex flex-row text-main   ">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512ad63cd2cff4a76d5441d_icons8-car-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                </div>
                <h2 className="font-bold text-xl pl-6 pt-5">
                  {one?.title.slice(0, 20)}
                </h2>
                <h2 className="font-bold text-base pr-5 pt-5 text-maingrey">
                  {one?.body.slice(0, 20)}
                </h2>
              </div>
            </div>
          </div>
          <div className="relative ww flex flex-col card ">
            <img
              className=" w-0 ppl pl-10  "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/6511a04329b7d448d12eb98b_listing-1-p-800.jpg"
              alt=""
            />
           <div className="absolute top-96 left-10  ">
              <div className=" pr-444 pt-7 absolute gg r-4">
                <h3 className="text-main  text">${price?.price}/Mo</h3>
                <div className="pl-40  pt-3 ii flex flex-row ">
                  <div className="flex flex-row text-main   ">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                  <div className="flex flex-row text-main pl-8">
                    <img
                      className="  h-6"
                      src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6512ad63cd2cff4a76d5441d_icons8-car-240.png"
                      alt=""
                    />
                    <p className="ml-1.5">2</p>
                    <h3 className="ml-1.5">Beds</h3>
                  </div>
                </div>
                <h2 className="font-bold text-xl pl-6 pt-5">
                  {one?.title.slice(0, 20)}
                </h2>
                <h2 className="font-bold text-base pr-5 pt-5 text-maingrey">
                  {one?.body.slice(0, 20)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}