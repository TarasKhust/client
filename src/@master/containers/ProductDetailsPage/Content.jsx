import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Controller, Thumbs, Navigation, Lazy } from "swiper";
import "swiper/swiper-bundle.css";
import "./ProductDetailsStyle.scss";
import Checkbox from "components/Checkbox/Checkbox";
import Chip from "components/Chip/Chip";
import Arrivals from "components/NewArrivals/Arrivals";
import Button from "components/BtnGroup/Button";
import { useQueryDetails } from "api/details.api";

SwiperCore.use([Pagination, Navigation, Controller, Thumbs, Lazy]);

const Content = (props) => {
    const url = location.pathname;
    const slashIndex = url.lastIndexOf("/");
    const itemId = url.substr(slashIndex + 1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const { loading, data } = useQueryDetails(null, itemId);

    const dataDetails = !loading ? data?.getProductById : [];

    const items = [
        {
            _id: "1",
            vendor: "44688",
            name: "PAŞABAHÇE Enoteca ",
            description: "Келих для  шампанського",
            packaging: "6 х 170мл",
            image: [
                "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
                "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
                "https://images.ua.prom.st/1064918125_w640_h640_nabor-bokalov-dlya.jpg",
                "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
            ],
            price: 440,
            overview: [
                {
                    title: "Келих для шампанського високий",
                    material: "Скло ударостійке",
                    size: "170 мл",
                    features: "",
                },
            ],
        },
    ];

    const thumbsConfig = {
        tag: "section",
        spaceBetween: 15,
        slidesPerView: 3,
        onSwiper: setThumbsSwiper,
};

    const sliderConfig = {
        tag: "div",
        spaceBetween: 0,
        slidesPerView: 1,
        thumbs: { swiper: thumbsSwiper },
        controller: { control: controlledSwiper },
        pagination: true,
        navigation: true,

    };

    const { count, description, image, name, price, productAttribute, id, vendor, brand, status } = dataDetails;

        let array = [];

        if (image){
             array = Object.values(image); // convert image object to array
        }

    return (
	<div className="tut_posuda-product">
		<div className="product_inner">
			<div className="product_visible" >
				<div className="product_slider-thumbs">
					<Swiper
						{ ...sliderConfig }
					>
						{array.map((item, index) => {
						                        return (
							<SwiperSlide
								key={`slide-${index}`}
								tag="div"
							>
								<img src={`https://servercrm.herokuapp.com/api/files/images/${item}`} alt={`Фото ${index}`} />
							</SwiperSlide>
						                        );
						                    })}
					</Swiper>
					<Swiper
						{...thumbsConfig}
					>
						{array.map((item, index) => {
						                        return (
							<SwiperSlide key={`thumb-${index}`} tag="li" style={{ listStyle: "none" }}>
								<img
									src={`https://servercrm.herokuapp.com/api/files/images/200X200/${item}`}
									alt={`Міні фото ${index }`}
								>
								</img>
							</SwiperSlide>
						                        );
						                    })}
					</Swiper>
				</div>
				<div className="product_overview">
					<h2 className="product_name">{name}</h2>
					<div className="product_brand-name">{brand && brand.name }</div>
					<div className="in_stock">
						<Checkbox mode="green" checked={status} disabled name="В наявності" label="В наявності" />
					</div>
					<div className="price">{`${price} грн`}</div>
					<div className="chopping_card-update">
						<Chip
							inputShow
							item={{ id, name, image, description, price, vendor, count }}
						/>
						<Button
							item={{ id, name, image, description, price, vendor, count }}
							text="В кошик"
							showSvg
							animation="draw-outline"
						/>
					</div>
					<div className="product_details-list">
						<h2 className="details_title">Деталі:</h2>
						<div className="list_visible">
							{productAttribute
			                        && productAttribute.map(({ attribute, attribute_group }, index) => {
			                            return (
				<div key={index}>
					<span>
						{attribute_group}
						{" "}
						:
					</span>
					{attribute}
				</div>
			                            );
			                        })}
						</div>
					</div>
				</div>
			</div>
			<div className="products_choice-category">
				<Arrivals title="Товари з цієї категорії" />
			</div>
		</div>
	</div>
    );
};

export default Content;