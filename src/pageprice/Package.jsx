import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Fqa from  './Fqa'
import Email from '../page/Email';
import Footer from '../Component/Footer';
import { addItems,removeItems } from '../Redux/Createslice';
import { useDispatch } from 'react-redux';
export default function Package() {
  const [one, setone] = useState();
  const [two, settwo] = useState();
  const [three, setthree] = useState();



  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/2')
    .then(res=>res.json())
    .then(data=>setone(data))
    },[])
    
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products/3')
    .then(res=>res.json())
    .then(data=>settwo(data))
    },[])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/3')
      .then(res=>res.json())
      .then(data=>setthree(data))
      },[])
const dispatch=useDispatch()
  
const handleclick1=()=>{
  dispatch(addItems(one))
}
const handleclick2=()=>{
  dispatch(addItems(two))
}
const handleclick3=()=>{
  dispatch(addItems(three))
}
  
 
  
  return (
    <>
    <br /><br /><br />
    <div className='w-full text-center'>
    <h2 className="rs-1 text-lg font-semibold text-main border-2 border-main w-52 lef p-2 rounded-2xl ">
          {one?.description.slice(0, 22)}
        </h2>
        <h2 className="rs-2 text-6xl font-semibold text-center  w-3/5 m p-2 rounded-2xl ">
          {one?.description.slice(0, 42)}
        </h2>
        </div>
    <div className='w-full min-h-96 mt-40 flex flex-col'>
    
        <div className='rs-3 flex flex-row flex-wrap ml-10'>
<div className='w-1/3 pl-10 rs-4 mt-14 min-h-96 flex flex-col bor border-maingrey'>
<p className='text-main  text-2xl font-semibold mt-7'>{one?.title.slice(0,5)}</p>
<p className='text-main text-3xl font-semibold mt-3'>${one?.price} USD</p>
<p className='text-maingrey w-4/5 mt-5'>{one?.title}</p>
<strong className='mt-6'>{one?.title.slice(0,9)}</strong>
<p className='text-maingrey w-3/5 mt-3'>{one?.title.slice(9,15)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(15,25)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(25,35)}</p>

<button onClick={handleclick1} className='mt-8 text-xl p-3 bord'>Add to Chart</button>
<br />
</div>
<div className='w-1/3 pl-10 mt-14 min-h-96 flex flex-col bor border-maingrey'>
<p className='text-main text-2xl font-semibold mt-7'>{one?.title.slice(0,5)}</p>
<p className='text-main text-3xl font-semibold mt-3'>${two?.price} USD</p>
<p className='text-maingrey w-4/5 mt-5'>{one?.title}</p>
<strong className='mt-6'>{one?.title.slice(0,9)}</strong>
<p className='text-maingrey w-3/5 mt-3'>{one?.title.slice(9,15)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(15,25)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(25,35)}</p>

<button onClick={handleclick2} className='mt-8 text-xl p-3 bord'>Add to Chart</button>
<br />
</div>
<div className='w-1/3 pl-10 mt-14 min-h-96 flex flex-col bor  border-maingrey'>
<p className='text-main text-2xl font-semibold mt-7'>{one?.title.slice(0,5)}</p>
<p className='text-main text-3xl font-semibold mt-3'>${three?.price} USD</p>
<p className='text-maingrey w-4/5 mt-5'>{one?.title}</p>
<strong className='mt-6'>{one?.title.slice(0,9)}</strong>
<p className='text-maingrey w-3/5 mt-3'>{one?.title.slice(9,15)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(15,25)}</p>
<p className='text-maingrey w-3/5 mt-1'>{one?.title.slice(25,35)}</p>

<button onClick={handleclick3} className='mt-8 text-xl p-3 bord'>Add to Chart</button>
<br />
</div>

        </div>
    </div>
    <br /><br />
    <div className='w-full min-h-96 mt-40 flex flex-col'>
    <h2 className=" text-lg font-semibold text-main border-2 border-main w-52 lef p-2 rounded-2xl ">
          {one?.description.slice(0, 22)}
        </h2>
        <h2 className=" text-6xl font-semibold text-center  w-3/5 m p-2 rounded-2xl ">
          {one?.description.slice(0, 42)}
        </h2>
        <br /><br />
        <Fqa/>
        </div>
        <br /><br /><br />
        <Email/>
        <Footer/>
    </>
  )
}
