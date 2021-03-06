import React from "react";
import ListProduct from "@master/containers/ListProduct/ListProduct";
import "./Pasabahce.scss";

const Content = () => {
	const items = [
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

  return (
	  <div className="tut-posuda_content">
		  <div className="product_inner-content">
			  <h2 className="product_title">Pasabahce</h2>
			  <ul className="products_list">
				  {items.map(({ _id, packaging, image, description, vendor, name, price, overview }) => {
					  return (
						  <ListProduct overview={overview} packaging={packaging} key={_id} _id={_id} image={image} description={description} vendor={vendor} name={name} price={price} />
					  );
				  })}
			  </ul>
		  </div>
	  </div>
  );
};

export default Content;
