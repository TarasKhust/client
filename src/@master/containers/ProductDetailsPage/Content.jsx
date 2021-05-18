import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Controller, Thumbs, Navigation, Lazy } from "swiper";
import "swiper/swiper-bundle.css";
import "./ProductDetailsStyle.scss";
import Checkbox from "components/Checkbox/Checkbox";
import Chip from "components/Chip/Chip";
import Arrivals from "components/NewArrivals/Arrivals";
import Button from "components/BtnGroup/Button";

SwiperCore.use([Pagination, Navigation, Controller, Thumbs, Lazy]);

const Content = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

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

    const catagoryItems = [
        {
            _id: "1",
            vendor: "44688",
            name: "PAŞABAHÇE Enoteca ",
            description: "Келих для  шампанського",
            packaging: "6 х 170мл",
            image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
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
        {
            _id: "2",
            vendor: "44728",
            name: "PAŞABAHÇE Enoteca ",
            description: "Келих для вина",
            packaging: "6 х 420мл",
            image: "https://images.ua.prom.st/1064918125_w640_h640_nabor-bokalov-dlya.jpg",
            price: 471,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "420 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "3",
            vendor: "44228",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для вина ",
            packaging: "6 х 545мл",
            image: "https://i1.rozetka.ua/goods/1682570/pasabahce_44819_set_barocco_images_1682570621.jpg",
            price: 536,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "545 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "4",
            vendor: "44738-1",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для вина",
            packaging: "6 x 615мл",
            image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
            price: 529,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "615 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "5",
            vendor: "44238",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для вина",
            packaging: "6 x 630мл",
            image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
            price: 577,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "630 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "6",
            vendor: "44248",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для вина",
            packaging: "6 x 780мл",
            image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
            price: 577,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "780 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "7",
            vendor: "440061-1",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для мартіні",
            packaging: "6 x 215мл",
            image: "https://irecommend.ru/sites/default/files/product-images/692175/QNnpaVBQYVkM08mgxUt8A.jpg",
            price: 490,
            overview: [
                {
                    title: "Келих для мартіні",
                    material: "Скло ударостійке",
                    size: "215 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "8",
            vendor: "440295",
            name: "PAŞABAHÇE Amber ",
            description: "Келих для  шампанського",
            packaging: "2 x 210мл ",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 207,
            overview: [
                {
                    title: "Келих для  шампанського",
                    material: "Скло ударостійке",
                    size: "215 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "9",
            vendor: "440140",
            name: "PAŞABAHÇE SIDERA",
            description: "Келих для  вина",
            packaging: "1 шт / 245 мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 140,
            overview: [
                {
                    title: "Келих для  вина",
                    material: "Скло ударостійке",
                    size: "245 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "10",
            vendor: "440139",
            name: "PAŞABAHÇE SIDERA",
            description: "Келих для  вина",
            packaging: "1 шт / 615 мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 164,
            overview: [
                {
                    title: "Келих для  вина",
                    material: "Скло ударостійке",
                    size: "615 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "11",
            vendor: "51648-1",
            name: "PAŞABAHÇE Timeless",
            description: "Келих для  вина",
            packaging: "4 х 320мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 886,
            overview: [
                {
                    title: "Келих для  вина",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "320 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "12",
            vendor: "440276-1",
            name: "PAŞABAHÇE Timeless",
            description: "Келих для води та коктейлів",
            packaging: "6 х 330мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 733,
            overview: [
                {
                    title: "Келих для води та коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "330 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "13",
            vendor: "52820",
            name: "PAŞABAHÇE Timeless",
            description: "Склянка висока",
            packaging: "6 х 295мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 475,
            overview: [
                {
                    title: "Келих для води та коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "295 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "14",
            vendor: "52810",
            name: "PAŞABAHÇE Timeless",
            description: "Склянка низька",
            packaging: "4 х 205мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 381,
            overview: [
                {
                    title: "Келих для води та коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "205 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "15",
            vendor: "52800",
            name: "PAŞABAHÇE Timeless",
            description: "Склянка висока",
            packaging: "4 х 450мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 594,
            overview: [
                {
                    title: "Склянка висока для води і коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "450 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "16",
            vendor: "52790",
            name: "PAŞABAHÇE Timeless",
            description: "Набір склянок",
            packaging: "4 х 345мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 504,
            overview: [
                {
                    title: "Склянка низька для води і коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "345 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "17",
            vendor: "440356-1",
            name: "PAŞABAHÇE Timeless",
            description: "Келих для  шампанського",
            packaging: "6 х 175мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 916,
            overview: [
                {
                    title: "Келих для шампанського",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "175 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "18",
            vendor: "440176-1",
            name: "PAŞABAHÇE Timeless",
            description: "Келих для мартіні",
            packaging: "6 х 230мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 748,
            overview: [
                {
                    title: "Келих для мартіні",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "230 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "19",
            vendor: "440437",
            name: "PAŞABAHÇE ELYSIA",
            description: "Келих коктейльний",
            packaging: "1шт / 500мл",
            image: "https://images.ua.prom.st/2298824450_w500_h500_kelih-dlya-koktejlyu.jpg",
            price: 158,
            overview: [
                {
                    title: "Келих для коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "500 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "20",
            vendor: "520004",
            name: "PAŞABAHÇE ELYSIA",
            description: "Склянка низька",
            packaging: "4 х 355 мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 404,
            overview: [
                {
                    title: "Склянка низька для води і коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "355 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "21",
            vendor: "520015",
            name: "PAŞABAHÇE ELYSIA",
            description: "Склянка висока ",
            packaging: "4 х 445мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 478,
            overview: [
                {
                    title: "Склянка висока для води і коктейлів",
                    material: "Скло ударостійке з рельєфним малюнком",
                    size: "445 мл",
                    features: "",
                },
            ],
        },
        {
            _id: "22",
            vendor: "67026",
            name: "PAŞABAHÇE F&D Fame ",
            description: "Келих для  шампанського ",
            packaging: "6 х 280мл",
            image: "https://image.galacentre.ru/size/1000/68WHRAD-2.jpg",
            price: 653,
            overview: [
                {
                    title: "Келих для шампанського",
                    material: "Надтонкий хрусталь",
                    size: "280 мл",
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

    return (
	<div className="tut_posuda-product">
		<div className="product_inner">
			{items.map(({ _id, name, vendor, description, image, price, count, packaging }) => {
                return (
	<div className="product_visible" key={_id}>
		<div className="product_slider-thumbs">

			<Swiper
				{ ...sliderConfig }
			>
				{image.map((item, index) => {
                    return (
	<SwiperSlide
		key={`slide-${index}`}
		tag="div"
	>
		<img src={item} alt={`Slide ${index}`} />
	</SwiperSlide>
                    );
                })}
			</Swiper>
			<Swiper
				{...thumbsConfig}
			>
				{image.map((item, index) => {
                    return (
	<SwiperSlide key={`thumb-${index}`} tag="li" style={{ listStyle: "none" }}>
		<img
			src={item}
			alt={`Thumbnail ${index}`}
		>
		</img>
	</SwiperSlide>

                    );
                })}
			</Swiper>
		</div>
		<div className="product_overview">
			<h2 className="product_name">{description}</h2>
			<div className="product_brand-name">{name}</div>
			<div className="in_stock">
				<Checkbox mode="green" disabled name="В наявності" label="В наявності" />
			</div>
			<div className="price">{`${price} грн`}</div>
			<div className="chopping_card-update">
				<Chip
					inputShow
					item={{ _id, name, image, description, price, vendor }}
				/>
				<Button
					item={{ _id, name, image, description, price, vendor }}
					text="В кошик"
					showSvg
				/>
			</div>
			<div className="product_details-list">
				<h2 className="details_title">Деталі:</h2>
				<div className="list_visible">

					{vendor ? <div>
						<span>Артикул:</span>
						{vendor}
					</div> : ""}
					{name ? <div>
						<span>Бренд:</span>
						{name}
					</div> : ""}
					{name ? <div>
						<span>Матеріал:</span>
						{name}
					</div> : ""}
					{name ? <div>
						<span>Покриття:</span>
						{name}
					</div> : ""}
					{name ? <div>
						<span>Серія: </span>
						{name}
					</div> : ""}
					{name ? <div>
						<span>Об `єм:</span>
						{name}
					</div> : ""}
					{name ? <div>
						<span>Плити:</span>
						{name}
					</div> : ""}
					{packaging ? <div>
						<span>Пакування:</span>
						{packaging}
					</div> : ""}
				</div>
			</div>
		</div>
	</div>
                );
            })}

			<div className="products_choice-category">
				<Arrivals title="Товари з цієї категорії" />
			</div>
		</div>

	</div>
    );
};

export default Content;