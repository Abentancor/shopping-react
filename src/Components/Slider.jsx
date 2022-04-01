import React, { Component } from 'react'
import { DataContext } from '../Context/Context'

import {Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { NavLink } from 'react-router-dom';



export class Slider extends Component {

   static contextType = DataContext;
   
   render(){
       const {products} = this.context
    return (
    <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{
            clickable: true,
            }}
            autoplay={{delay:3000 }}
            className={`flex justify-between flex-colflex-row`}    
        >
                
                {
                    products.map(product =>(
                        <SwiperSlide className='slider flex flex-row mx-auto' key={product._id}>
                            <div className='slider p-3 flex flex-col items-center '>
                                <NavLink to={`/Product/${product._id}`}>
                                    <img className='' src={product.src} alt={product.title} />
                                </NavLink>
                                <button className='mt-2 bg-slate-200 rounded-xl p-1 font-semibold ring ring-sky-900  hover:bg-slate-900 hover:text-white hover:ring-white scale-105 '>
                                     Add to cart
                                </button>
                                <h3 className='text-center mb-3'>{product.title}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }

        </Swiper>
    </>
  )
}}

export default Slider