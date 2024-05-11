import React,{useState, useEffect} from 'react'
import Slider from "react-slick";
import SquareIcon from '@mui/icons-material/Square';
import { data } from './Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'



const Carousel = () => {
   const [slidesToShow, setSlidesToShow] = useState(2);

   useEffect(() => {
      const handleResize = () => {
         setSlidesToShow(window.innerWidth < 850 ? 1 : 2);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1700,
      pauseOnHover: true
   };
   return (
      <>
         <div className='carousel bg-blue-900 py-10 my-10 flex flex-col'>
            <p className=' font-sans font-semibold mx-10'> <SquareIcon className='text-sm text-blue-900'
               style={{ fontSize: '10px' }} />&nbsp;&nbsp;&nbsp;<span className='text-xs text-white'>OUR TESTIMONIALS</span></p>
            <p className='text-3xl font-semibold text-white mx-10 my-5'>What Customers Say About Us</p>
            <div className='w-10/12 m-auto'>
               <Slider {...settings}>
                  {data.map((d) => {
                     return (
                        <div className='flex flex-col'>
                           <div className='bg-white rounded-t-xl p-10'>
                              <p className='text-sm text-gray-500'>{d.note}</p>
                           </div>
                           <div className='bg-gray-300 flex p-4 '>
                              <div>
                                 <img className='rounded-full w-14' src={d.image} alt="" />
                              </div>
                              <div className='ml-2'>
                                 <p className='text-sm'><span className='font-semibold'>{d.name}</span> <br />
                                    <span className='text-blue-400'>{d.position}</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </Slider>
            </div>
         </div>
      </>
   )
}

export default Carousel