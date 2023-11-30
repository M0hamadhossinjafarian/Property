import React from 'react'
import Navbar from './Component/Navbar'
import Homepage1 from './page/Homepage1'
import { Route,Routes,Navigation, Navigate } from 'react-router-dom'
import Package from './pageprice/Package'
import Blogs from './pageblog/Blogs'
import Contact from './pagecontact/Contact'
import Login from './Component/Pageloginrigester/Login'
import { useSelector } from 'react-redux'
import Cart from './Cartpage/Cart'
import { motion } from 'framer-motion'
export default function App() {
  const token=useSelector(state=>state.shop.token)

  return (
    <>
    <motion.div initial={{y:200,opacity:0}} transition={{delay:0.5,duration:0.9}}       viewport={{ once: true}} whileInView={{y:0,opacity:1}} >
    <Navbar/>
    </motion.div>

    <Routes>
      <Route path='/' element={<Homepage1/>}/>
      <Route path='/package' element={<Package/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={token?<Navigate to={'/'}/>:<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>




    </Routes>
    </>
  )
}
