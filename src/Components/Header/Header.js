import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeaderLink from './HeaderLink'
import logo from '../../Assets/images/logo.svg'
import box from '../../Assets/images/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp'
import './Header.css'

const Header = () => {

   const [toggle, setToggle] = useState(false)

   const toggleMenu = () => {
      setToggle(prev => !prev);
   }

   return (
      // navigation bar
      <>
         <div className='main'>
            <nav className='flex justify-between '>
               <div className='flex justify-between items-center md:w-auto w-full pt-5'>
                  <img src={logo} alt="" className='md:cursor-pointer h-9 lg:ml-9 ml-3' />
                  <div className='md:hidden cursor-pointer right-8 fixed' onClick={toggleMenu}>
                     {toggle ? <CloseIcon /> : <MenuIcon />}
                  </div>
               </div>
               <div className='flex mr-16'>
                  <ul className='md:flex hidden items-center font-sans font-medium text-md'>
                     <li>
                        <Link to={'/'} className='py-7 px-3 inline-block'>
                           Home
                        </Link>
                     </li>
                     <HeaderLink />
                  </ul>
                  {/* mbile nav */}
                  <div>
                     {toggle &&
                        <div className=' bg-white fixed w-9/12 h-full left-0 z-10'>
                           <ul className={`md:hidden`}>
                              <div className='py-8 bg-blue-100 flex justify-center '>
                                 <img src={logo} alt="" className='md:cursor-pointer h-10 ' />
                              </div>
                              <li className='border-gray-300 border-b mx-4'>
                                 <Link to={'/'} className='py-7 px-3 inline-block'>
                                    Home
                                 </Link>
                              </li>
                              <HeaderLink />
                              <div></div>
                           </ul>
                        </div>
                     }
                  </div>
               </div>
            </nav>
            <div className='m-5 flex flex-col justify-center items-center md:flex-row md:ml-20'>
               <div className=' flex flex-col md:w-2/4'>
                  <p className='  text-black md:text-6xl font-semibold font-sans'>Manual</p>
                  <p className='  text-black md:text-6xl font-semibold font-snas'>Inspection is</p>
                  <p className='  text-blue-500 md:text-6xl font-sans'>Slow& Error-Prone</p>
                  <p className='  text-gray-500 font-sans'>AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process</p>
                  <div className='mt-8 '>
                     <button className=' button bg-blue-700 text-sm py-1 px-3 md:text-md md:py-3.5 md:px-8 rounded-full hover:bg-white group'   >
                        <span className='text-white font-semibold group-hover:text-blue-700'>
                           Schedule call
                        </span>
                     </button>
                     <button className='button ml-6 bg-blue-700 w-9 h-9 md:w-14 md:h-14 rounded-full hover:bg-white group'>
                        <PlayArrowIcon className='text-white group-hover:text-blue-700' />
                     </button>
                     <span className='ml-6 hover:text-blue-700 font-semibold cursor-pointer hidden md:block'>watch now</span>
                  </div>
               </div>
               <div className='box mt-5'>
                  <img src={box} alt="iamge1" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Header