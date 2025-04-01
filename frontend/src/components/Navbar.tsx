import { Link } from 'react-router-dom'
import logo from './../assets/slider/logo.png'
import {motion} from "framer-motion"
import { Chevron } from './icons/chevron'
import { useState } from 'react'


export function Navbar() {
    const [open, setOpen] = useState(false)

    function handlePress( ){
        setOpen(open)
    }
    return <div className="sticky top-0 z-50 backdrop-blur-xs   bg-primary w-full border-b-[#FCD7D7] md:border-hidden lg:border-hidden border-b-2  p-4 lg:px-40 md:px-20 ">
        <div className=' flex lg:hidden md:hidden justify-between   '> 
            <div className='flex ml-20'>
            <motion.img  whileHover={{ scale: 1.2 } }src={logo} className='w-10 h-auto'/>
            <h1 className='font-family-rubik text-2xl ml-7 font-bold mt-2'> Kryptic </h1>
            </div>
            
            <div className=' ml-10  bg-[#FCD7D7] rounded-full p-3'>
                <Chevron size='sm' color='black'onClick={handlePress} />

            </div>
            {
                open && <div  className='flex flex-col bg-white border-2 lg:hidden md:hidden p-10 justify-center '>
                      <p >  Blog</p>
               
               <p  >How it works </p> 
             <p>About </p>
             <div className='  text-lg font-lora space-x-7  '>
                <Link to={'/signin'}>
                <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='mt-2 text-gray-400 font-extrabold'>  Signin  </motion.div>
                </Link>
                 <Link to={'/signup'}> 
                 <div  >
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className=' shadow-2xs rounded-md bg-[#FCD7D7] font-bold cursor-pointer'>  Get Started </motion.button></div>  
                 </Link>
            </div>
                    </div>
            }
        </div>
        <div className=" hidden md:flex  lg:flex items-center justify-between h-14">
            <div className="flex items-center ">
               <motion.img  whileHover={{ scale: 1.2 } }src={logo} className='w-16 h-auto'/>
               <h1 className='font-family-rubik text-2xl ml-7 font-bold'> Kryptic </h1>

            </div>
            <div className=' lg:flex text-lg font-lora md:hidden space-x-7 text-gray-800 cursor-pointer  '>
                <p>  Blog</p>
               
                   <p  >How it works </p> 
                 <p>About </p>

            </div>
            <div className=' flex text-lg font-lora space-x-7  '>
                <Link to={'/signin'}>
                <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='mt-2 text-gray-400 font-extrabold'>  Signin  </motion.div>
                </Link>
                 <Link to={'/signup'}> 
                 <div  >
                    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='ml-9 p-2 shadow-2xs rounded-md bg-[#FCD7D7] font-bold cursor-pointer'>  Get Started </motion.button></div>  
                 </Link>
            </div>
        </div>
    
    </div>
}