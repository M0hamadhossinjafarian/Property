import React,{useState,useEffect} from 'react'
import Blog from '../page/Blog'
import Email from '../page/Email'
import Footer from '../Component/Footer'
export default function Blogs() {
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
  <div className='flex flex-col justify-center alii kjj'>
<h2 className='absolute top-1/4   text-xl font-bold ab-1 text-white'>{one?.title.slice(0,30)}</h2>
<p  className='absolute top-1/3  ab-2'>{one?.body.slice(0,50)}</p>
</div>
<br /><br /><br />
    <Blog/>
    <Email/>
    <Footer/>
    </>
  )
}
