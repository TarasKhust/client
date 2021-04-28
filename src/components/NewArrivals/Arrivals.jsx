import React from "react";
import { Swiper as Slider, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "./ArrivalsStyle.scss";
import Button from "components/BtnGroup/Button";
import Chip from "components/Chip/Chip";

// install Swiper's Controller component
SwiperCore.use([Navigation]);

const Arrivals = ({ title }) => {
    const items = [
      {
	    _id: "1",
        vendor: "AA111BB",
	    name: "Paşabahçe Aquatic",
	    description: "Стопка для водки набор 6Х60мл",
	    image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
	    price: 65.00,
      },
      {
	    _id: "2",
        vendor: "AA111BB",
	    name: "Paşabahçe",
	    description: "Стопка для водки набор 6Х60мл",
	    image: "https://images.ua.prom.st/1064918125_w640_h640_nabor-bokalov-dlya.jpg",
	    price: 75.00,
      },
      {
	    _id: "3",
        vendor: "AA111BB",
	    name: "Paşabahçe Aquatic",
	    description: "Стопка для водки набор 6Х60мл",
	    image: "https://i1.rozetka.ua/goods/1682570/pasabahce_44819_set_barocco_images_1682570621.jpg",
	    price: 85.00,
      },
      {
	    _id: "4",
        vendor: "AA111BB",
	    name: "Paşabahçe Aquatic",
	    description: "Стопка для водки набор 6Х60мл",
	    image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
	    price: 95.00,
      },

    ];

    const swiperConfig = {
      slidesPerView: 3,
      loop: true,
      navigation: true,
      spaceBetween: 20,
      breakpoints: {
        "1024": { slidesPerView: 3 },
        "601": { slidesPerView: 2 },
        "320": { slidesPerView: 1 },
      },
};

    return (
	<div className="arrivals_inner" >
		<h2 className="arrivals_title">{title}</h2>
		<div className="content_inner">
			<Slider
				{...swiperConfig}
			>

				{items.map(({ _id, name, image, description, price, vendor }) => {
			    return (
				    <SwiperSlide key={_id}>
					<div className="arrival_item">
						<figure className="arrival_image">
							<img src={image} alt="" />
						</figure>
						<div className="arrival_description">
							<div className="arrival_name">{name}</div>
							<h2 className="arrival_desc">{description}</h2>
							<div className="desc_row">
								<span className="price">{`${price} грн`}</span>
								<Chip inputShow={false} item={{ _id, name, image, description, price, vendor }} />
							</div>
						</div>
					</div>
				    </SwiperSlide>
			    );
			  })}
			</Slider>
		</div>
		<div className="arrivals_link">
			<Button text="Магазин" animation="draw-outline" />
		</div>
	</div>
    );
};

export default Arrivals;
