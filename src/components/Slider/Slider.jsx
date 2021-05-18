import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkBtn from "components/BtnGroup/LinkBtn";
import "swiper/swiper.scss";
import "./SliderStyle.scss";

import slide1 from "./slide_1.png";
import slide3 from "./slide_3.jpg";

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
	<section className="slider_container" id="home">
		<Swiper
			slidesPerView={1}
			parallax
			loop
			speed={1000}
			autoplay={{
                    delay: 3000,
			}}
		>
			<SwiperSlide>
				<figure className="slide-image">
					<img src={slide1} alt="" />
					<div className="slide_link">
						<LinkBtn animation="draw-outline" text="Магазин" />
					</div>
				</figure>
			</SwiperSlide>
			<SwiperSlide>
				<figure className="slide-image">
					<img src={slide3} alt="" />
					<div className="slide_link">
						<LinkBtn animation="draw-outline" text="Магазин" />
					</div>
				</figure>
			</SwiperSlide>
			<SwiperSlide>
				<figure className="slide-image">
					<img src={slide1} alt="" />
					<div className="slide_link">
						<LinkBtn animation="draw-outline" text="Магазин" />
					</div>
				</figure>
			</SwiperSlide>
		</Swiper>
	</section>
    );
};

export default Slider;