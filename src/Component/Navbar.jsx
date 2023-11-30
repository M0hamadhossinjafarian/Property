import React from 'react'
import 'boxicons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../Redux/Createslice'
import { useDispatch } from 'react-redux'
export default function Navbar() {
  const token=useSelector(state=>state.shop.token)
const dispatch=useDispatch()
  return (
    <>
    <nav className='w-full bg-white h-20'>
    <img className='mt-6 pl-24 img-nav' style={{height:'37px'}} src="https://assets-global.website-files.com/650adcad05bc07eb4bae8d2a/650ae0788dc09ff083a6935d_logo-p-500.png" alt="" />
    <svg className='menu-ham ' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>  

        <div className='dis inline-flex flex-row p-1 pl-60 absolute top-5 '>
            <Link to={'/'} className='ml-5 pt-2 font-semibold text-lg'>Home     </Link>
            <Link to={'/'} className='ml-5 pt-2 font-semibold text-lg'>Category </Link>
            <Link to={'/Package'} className='ml-5 pt-2 font-semibold text-lg'>Package  </Link>
            <Link to={'/blog'} className='ml-5 pt-2 font-semibold text-lg'>Blog     </Link>
            <Link to={'/contact'} className='ml-5 pt-2 font-semibold text-lg'>Contact  </Link>
            <Link to={'/cart'} className='ml-5 pt-2 font-semibold text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>                </Link>


</div>
        
    </nav>
    <br /><br /><br />   </>
  )
}
