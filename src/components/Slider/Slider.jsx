import React, {useEffect, useState} from 'react'
import SwiperCore, {Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "components/BtnGroup/Button";
import 'swiper/swiper.scss';
import './SliderStyle.scss'

import slide1 from './slide_1.png'
import slide3 from './slide_3.jpg'

SwiperCore.use([Autoplay]);

const Slider = () => {

    return(
        <section className="slider_container">
            <Swiper
                slidesPerView={1}
                parallax={true}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <figure className='slide-image'>
                        <img src={slide1} alt=""/>
                        <div className="slide_link">
                            <Button animation={'draw-outline'} text={'Магазин'}/>
                        </div>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='slide-image'>
                        <img src={slide3}  alt=""/>
                        <div className="slide_link">
                            <Button animation={'draw-outline'} text={'Магазин'}/>
                        </div>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='slide-image'>
                        <img src={slide1}  alt=""/>
                        <div className="slide_link">
                            <Button animation={'draw-outline'} text={'Магазин'}/>
                        </div>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider