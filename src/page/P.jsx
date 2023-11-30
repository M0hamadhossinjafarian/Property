import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

export default function Product() {
  const [one, setone] = useState();
  const [price, setprice] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setone(data));
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setprice(data));
  }, []);
  return (
    <>
      <br />
      <br />
      <br />
      <motion.div className="overflow-hidden" initial={{y:400,opacity:0}} transition={{delay:0.3,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >

      <div className="prod  overflow-hidden w-full hh text-center flex flex-row flex-wrap ">
        <span className="r-5 flex flex-col text-center m-le">
          <h2 className="lef-2 text-lg font-semibold text-main border-2 border-main w-52 lef p-2 rounded-2xl ">
            {one?.body.slice(0, 22)}
          </h2>
          <h1 className="pt-10 font-bold text-5xl">
            {one?.title.slice(0, 30)}
          </h1>
        </span>
        <div className="flex flex-row we -ml-2 s-1 overflow-hidden">
          <div className="flex s-2 flex-row flex-wrap rounded-xl relative mii">
            <img
              className=" s-3 w- pt-16 pl-40 rounded-xl imm  "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/653b6e9a6a851a2f822e9598_listing-6-p-800.jpg"
              alt=""
            />
            <div className="flex flex-col s absolute top-80  line  left-48 text-white font-bold text-xl">
              <h2>{one?.title.slice(0, 20)}</h2>
              <h2 className="text-lg pr-5">{one?.body.slice(0, 20)}</h2>
            </div>

            <div className=" s ttop absolute pl-2  flex flex-row ">
              <h2 className=" justify-start -pl-20 font-bold text-3xl  text-white">
                ${price?.price}
              </h2>

              <div className="  text-white  pl-32  flex flex-row pt-1 ">
                <img
                  className="hh1  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-6">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-5">
                <img
                  className="hh1  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row relative flex-wrap we overflow-hidden  -ml-32 ">
            <img
              className=" w- pt-16 pl-40 rounded-xl xs  "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/653b6e6821fd1a5f49955d82_listing-5-p-800.jpg"
              alt=""
            />
            <span className="flex flex-col absolute top-80  line  left-48 text-white font-bold text-xl">
              <h2>{one?.title.slice(0, 20)}</h2>
              <h2 className="text-lg pr-5">{one?.body.slice(0, 20)}</h2>
            </span>

            <div className=" poo ttop absolute pl-2  flex flex-row ">
              <h2 className=" justify-start -pl-20 font-bold text-3xl  text-white">
                ${price?.price}
              </h2>

              <div className=" text-white  pl-32  flex flex-row pt-1 ">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-6">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-5">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
            </div>
            </div>
            <div className="flex flex-row relative flex-wrap we   ">
            <img
              className=" w- pt-16 pl-40 rounded-xl  "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/653b6daccbe9639e1d3d9bc8_listing-4-p-800.jpg"
              alt=""
            />
            <span className="flex flex-col absolute top-80  line  left-48 text-white font-bold text-xl">
              <h2>{one?.title.slice(0, 20)}</h2>
              <h2 className="text-lg pr-5">{one?.body.slice(0, 20)}</h2>
            </span>

            <div className="  ttop absolute pl-2  flex flex-row ">
              <h2 className=" justify-start -pl-20 font-bold text-3xl  text-white">
                ${price?.price}
              </h2>

              <div className=" text-white  pl-32  flex flex-row pt-1 ">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-6">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-5">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
            </div>
            </div>
            <div className="flex flex-row relative flex-wrap we  -ml-32 ">
            <img
              className=" w- pt-16 pl-40 rounded-xl xs "
              src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d33/653b6d166a851a2f822d04ae_listing-3-p-800.jpg"
              alt=""
            />
            <span className="flex flex-col absolute top-80  line  left-48 text-white font-bold text-xl">
              <h2>{one?.title.slice(0, 20)}</h2>
              <h2 className="text-lg pr-5">{one?.body.slice(0, 20)}</h2>
            </span>

            <div className=" poo ttop absolute pl-2  flex flex-row ">
              <h2 className=" justify-start -pl-20 font-bold text-3xl  text-white">
                ${price?.price}
              </h2>

              <div className=" text-white  pl-32  flex flex-row pt-1 ">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511981b7dbd417a6b020b77_icons8-bed-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-6">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511983d42510f31c4223ca7_icons8-hydrotherapy-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
              <div className="pt-1 flex flex-row text-white pl-5">
                <img
                  className="  h-7"
                  src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/6511986f8652ff122a8de926_icons8-fit-to-page-240.png"
                  alt=""
                />
                <p className="ml-1.5">2</p>
                <h3 className="ml-1.5">Beds</h3>
              </div>
            </div>
            </div>
            </div>


    
    </motion.div>
    </>
  );
}
