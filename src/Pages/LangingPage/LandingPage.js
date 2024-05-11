import React from 'react'
import Header from '../../Components/Header/Header'
import Crafting from '../../Components/Crafting/Crafting'
import Tracking from '../../Components/Tracking/Tracking'
import Customer from '../../Components/Customer/Customer'
import Carousel from '../../Components/Carousel/Carousel'
import Trusted from '../../Components/Trusted/Trusted'
import SquareIcon from '@mui/icons-material/Square';
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <>
      <Header />
      <Crafting />
      <Tracking />
      <div>
        <p className='text-center'><SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} />&nbsp;&nbsp;
          <span className='text-xs'>OUR CUSTOMER</span>&nbsp;&nbsp;
          <SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} /></p>
        <p className='mt-3 text-center text-4xl font-semibold'> They Trust Us</p>
      </div>
      <Customer />
      <Carousel />
      <div>
        <p className='text-center'><SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} />&nbsp;&nbsp;
          <span className='text-xs'>BRANDS WE WORK WITH</span>&nbsp;&nbsp;
          <SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} /></p>
        <p className='mt-3 text-center text-4xl font-semibold'> Trusted by Thousands of Businesses</p>
      </div>
      <Trusted />
      <div>
        <p className='text-center'><SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} />&nbsp;&nbsp;
          <span className='text-xs'>AI INSIGHTS</span>&nbsp;&nbsp;
          <SquareIcon className='text-sm text-blue-900' style={{ fontSize: '10px' }} /></p>
        <p className='mt-3 text-center text-4xl font-semibold'>To Read</p>
        <hr className='mx-16 my-16' />
      </div>
      <Blog />
      <Footer />
    </>

  )
}

export default LandingPage