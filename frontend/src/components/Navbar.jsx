// import React from 'react'
// import { useAuth } from '../context/AuthProvider'

// function Navbar() {
//   const { user,blogs}=useAuth()
//   console.log(blogs)
//   return <>
//   <nav>
//     <div>
//       <div>1</div>
//       <div>2</div>
//       <div>3</div>
//     </div>
//   </nav>
//   </>
  
// }

// export default Navbar
import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'
import { MdMenuBook } from "react-icons/md";
// import { IoClose, IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const { blogs } = useAuth()
  const [show, setShow] = useState(false)
  console.log(blogs)
  return <>
  <nav className='shadow-lg px-4 py-4'>
    <div className='flex items-center justify-between container mx-auto'>
      <div className='font-semibold text-xl'>
        One<span className='text-blue-800 underline'>Blog</span>
      </div>
      {/* Desktop */}
      <div className='mx-6'>
        <ul className='hidden md:flex space-x-6'>
          <Link to="/"className='hover:text-green-500 underline'>HOME</Link>
          <Link to="/blogs"className='hover:text-green-500 underline'>BLOGS</Link>
          <Link to="/creators"className='hover:text-green-500 underline'>CREATORS</Link>
          <Link to="/about"className='hover:text-green-500 underline'>ABOUT</Link>
          <Link to="/contact"className='hover:text-green-500 underline'>CONTACT</Link>
        </ul>
        <div className='md:hidden' onClick={()=>setShow(!show)}>{show?<IoMdCloseCircleOutline size={24}/>:<MdMenuBook size={24}/>}</div>
      </div>
      <div className='hidden md:flex space-x-2'>
        <Link to="/dashboard" className='bg-yellow-300 text-black font-semibold hover:bg-teal-400 duration-300 px-4 py-2 rounded-full'>DASHBOARD</Link>
        <Link to="/Login" className='bg-yellow-300 text-black font-semibold hover:bg-teal-400 duration-300 px-4 py-2 rounded-full'>LOGIN</Link>
      </div>
    </div>
    {/* Mobile navbar */} 
    {show && (
      <div className='bg-white'>
        <ul className='flex flex-col h-screen place-items-center justify-center space-y-3 md:hidden text-xl'>
          <Link to="/"onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"   className='bg-yellow-300 text-black font-semibold hover:bg-teal-600 duration-300 px-4 py-2 rounded-full underline'>HOME</Link>


          <Link to="/blogs"onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"   className='bg-green-400 text-black font-semibold hover:bg-teal-600 duration-300 px-4 py-2 rounded-full underline'>BLOGS</Link>


          <Link to="/creators"onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"   className='bg-pink-500 text-black font-semibold hover:bg-teal-600 duration-300 px-4 py-2 rounded-full underline'>CREATORS</Link>


          <Link to="/about"onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"   className='bg-indigo-500 text-black font-semibold hover:bg-teal-600 duration-300 px-4 py-2 rounded-full underline'>ABOUT</Link>


          <Link to="/contact"onClick={()=>setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"   className='bg-cyan-300 text-black font-semibold hover:bg-teal-600 duration-300 px-4 py-2 rounded-full underline'>CONTACT</Link>
        </ul>
      </div>
    )}
  </nav>
  </>
}

export default Navbar