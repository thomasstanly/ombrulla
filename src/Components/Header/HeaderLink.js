import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

const HeaderLink = () => {
   const links = [
      {
         name: 'Service',
         icon: <ExpandMoreIcon />,
         submenu:
            [{ link: 'AI Visual Inspection' },
            { link: 'AI Infratructure Inspection' },
            { link: 'AI People Tracking' },
            { link: 'AI Data Analysis' }
            ]
      },
      {
         name: 'Product',
         icon: <ExpandMoreIcon />,
         submenu:
            [{ link: 'Asset Performance Management' }]
      },
      {
         name: 'About'
      },
      {
         name: 'Blog'
      },
      {
         name: 'Contact'
      }
   ]
   const [text, setText] = useState('');

   const handleParentClick = (name) => {
      setText(text === name ? '' : name);
   };

   return (
      <>
         {
            links.map((link, index) => {
               return (
                  <>
                     <div key={index} className='text-left px-2 md:px-0 py-4 md:cursor-pointer border-gray-300 border-b mx-4 md:border-b-0 group hover:text-blue-600'>
                        <div className='flex justify-between ' onClick={() => handleParentClick(link.name)}>
                           <span className='font-semibold hover:text-blue-400'>
                           {link.name}
                           </span>
                           {link.icon && (
                              <span className="md:inline hidden">
                                 {link.icon}
                              </span>
                           )}
                           {link.icon && (
                              <span className=" md:hidden">
                                 {text ? <RemoveCircleOutlinedIcon className='text-blue-500' /> :<AddCircleOutlinedIcon className='text-blue-500' />}
                              </span>
                           )}
                        </div>
                        {link.submenu && (
                           <div className='md:absolute z-10 md:top-16 bg-white hidden group-hover:md:block hover:md:block'>
                              {link.submenu.map((submenuItem, index) => {
                                 return (
                                    <div className=' border-gray-300 border-b'>
                                       <li key={index} className='md:cursor-pointer text-black hover:text-blue-400 m-4'>
                                          <Link to=''>{submenuItem.link}</Link>
                                       </li>
                                    </div>
                                 )
                              })
                              }
                           </div>
                        )}
                     </div>
                     {/* mobile nav */}
                     {link.submenu && text === link.name && (
                        <div>
                           {link.submenu.map((submenuItem, subIndex) => (
                              <div key={subIndex} className='ml-7 border-gray-300 border-b md:hidden'>
                                 <li className='md:cursor-pointer text-black m-4 hover:text-blue-400'>
                                    <Link to='' className='hover:text-blue-400'>{submenuItem.link}</Link>
                                 </li>
                              </div>
                           ))}
                        </div>
                     )}
                  </>
               )
            })
         }
      </>

   )
}

export default HeaderLink