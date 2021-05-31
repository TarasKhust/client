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

const Content = () => {
    const url = location.pathname;
    const slashIndex = url.lastIndexOf("/");
    const itemId = url.substr(slashIndex + 1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const { loading, data } = useQueryDetails(null, itemId);
    const dataDetails = !loading ? data?.getProductById : [];

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
					{array.length > 1
                    && <Swiper
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
                       </Swiper>}
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