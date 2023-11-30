import React,{useEffect,useState} from 'react'
import Fqa from '../pageprice/Fqa'
import Email from '../page/Email';
import Footer from '../Component/Footer';
export default function Contact() {
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
    
    <div className='flex flex-col justify-center alii w-full kj'>

<h2 className='absolute top-1/4 text-white text-xl font-bold ab-1'>{one?.title.slice(0,30)}</h2>
<p  className='absolute top-1/3 ab-2'>{one?.body.slice(0,50)}</p>

</div>
<br /><br /><br />
    <div className='w-3/5 hi flex  flex-row flex-wrap m-auto pl-40'>
<div className='flex flex-col w-1/3 '>
<h2>Name</h2>
<input type="text"  className='h-12 border rounded-md border-maingrey'/>
</div>
<div className='flex flex-col w-1/3 ml-10'>
<h2>Email</h2>
<input type="text"  className='h-12 border rounded-md border-maingrey'/>
</div>
<div  className='flex mt-5 flex-col w-1/3 '>
<h2>Phone</h2>
<input type="text"  className='h-12 border rounded-md border-maingrey'/>
</div>
<div className='flex mt-5 flex-col w-1/3 ml-10'>
<h2>Company</h2>
<input type="text"  className='h-12 border rounded-md border-maingrey'/>
</div>

<div className='flex flex-col wid mt-10 '>
<h2>Message</h2>
<input type="text"  className='h-24  border rounded-md border-maingrey'/>
</div>
<button className='bg-white mt-10  wid h-14 border border-maingrey'>Send</button>
    </div>
    <br /><br /><br />
    <Fqa/>
    <Email/>
    <Footer/>
    </>
  )
}
