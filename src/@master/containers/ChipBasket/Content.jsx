import React from "react";
import "./ChipBasketStyle.scss";
import Remove from "./img/cancel.svg";

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
            count: 2,
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
            count: 3,
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
            vendor: "44228-1",
            name: "PAŞABAHÇE Enoteca",
            description: "Келих для вина ",
            packaging: "6 х 545мл",
            image: "https://i1.rozetka.ua/goods/1682570/pasabahce_44819_set_barocco_images_1682570621.jpg",
            price: 536,
            count: 4,
            overview: [
                {
                    title: "Келих для вина",
                    material: "Скло ударостійке",
                    size: "545 мл",
                    features: "",
                },
            ],
        },

    ];

    return (
	<div className="tut-posuda_chip">
		<div className="chip_inner">
			<h2 className="chip_title">
				Корзина
			</h2>
			<table className="chip_basket-table" cellPadding="0" cellSpacing="0">
				<tbody>
					<tr className="chip_row-head">
						<th className="head_title t-large">Продукт</th>
						<th></th>
						<th className="head_title vendor t-small">Артикул</th>
						<th className="head_title t-small">Ціна</th>
						<th className="head_title t-small">Кількість</th>
						<th className="head_title in_all t-small">Всього</th>
						<th></th>
					</tr>
					{items.map(({ _id, name, vendor, description, image, price, count }) => {
                            return (
	<tr className="chip_row-items" key={_id}>
		<td className="item_vis-l">
			<div>
				<figure>
					<img src={image} alt="" />
				</figure>
			</div>
		</td>
		<td className="chip_item-desc">
			<p className="chip_item-title">
				{description}
			</p>
			<p className="chip_item-title">
				{name}
			</p>
		</td>
		<td className="chip_item-desc vendor">
			{vendor}
			{" "}
		</td>
		<td className="chip_item-desc">{`${price} грн`}</td>
		<td className="chip_item-desc quantity">
			<div className="quantity_inner">
				<span>-</span>
				{count}
				<span>+</span>
			</div>
		</td>
		<td className="chip_item-desc desc-gr">1 490.00 грн</td>
		<td className="remove">
			<Remove />
		</td>
	</tr>
                            );
                        })}
				</tbody>
			</table>
			<div className="chip_basket-row">
				<span className="total_basket-price">1 490 грн</span>
			</div>
			<div className="chip_basket-row">
				<button className="submit_basket">оформити замовлення</button>
			</div>
		</div>
	</div>
    );
};

export default Content;
