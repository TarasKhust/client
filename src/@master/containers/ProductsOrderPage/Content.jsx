import React from "react";
import "./ProductsOrderStyle.scss";
import Checkbox from "components/Checkbox/Checkbox";
import { Link } from "react-router-dom";

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
    ];

    const deliveryType = [
        "Доставка у відділення НП",
        "Доставка кур'єром",
    ];

    const paymentType = [
        "Повна оплата на карту",
        "Накладеним платежем",
    ];

    return (
	<div className="tut-posuda_order">
		<div className="order_inner">
			<h2 className="order_title">Оформлення замовлення</h2>
			<div className="order_content">
				<div className="order_form-submit">
					<h3 className="form_title">Адреса доставки</h3>
					<form action="" className="submit_form">
						<div className="input_group">
							<input
								type="text"
								placeholder="ФИО*"
							/>
						</div>
						<div className="input_group">
							<input
								type="phone"
								placeholder="Телефон*"
							/>
						</div>
						<div className="input_group">
							<input
								type="email"
								placeholder="Email"
							/>
						</div>
						<div className="flex_checked-list">
							{deliveryType.map((item, index) => {
                                return (
	<label
		key={index}
		className="label_container"
		htmlFor={item}
	>
		<Checkbox
			mode="yellow"
			name={item}
		/>
		<span>{item}</span>
	</label>
                                );
                            })}
						</div>
						<div className="checked_visible">
							<div className="input_group">
								<input type="text" placeholder="Город*" />
							</div>
							<div className="input_group">
								<input type="text" placeholder="Отделение*" />
							</div>
						</div>
						<div className="checked_visible">
							<div className="input_group">
								<input type="text" placeholder="Город*" />
							</div>
							<div className="input_group">
								<input type="text" placeholder="Улица*" />
							</div>
							<div className="checked_row">
								<div className="input_group">
									<input type="text" placeholder="№ дома*" />
								</div>
								<div className="input_group">
									<input type="text" placeholder="№ квартиры" />
								</div>
							</div>
						</div>
						<div className="checked_payment-type">
							<h3 className="payment_title">
								Способ оплаты
							</h3>
							<div className="flex_checked-list">
								{paymentType.map((item, index) => {
                                    return (
	<label
		key={index}
		className="label_container"
		htmlFor={item}
	>
		<Checkbox
			mode="yellow"
			name={item}
		/>
		<span>{item}</span>
	</label>
                                    );
                                })}
							</div>
						</div>
						<div className="flex-row-submit">
							<Link to="/catalog" >Продовжити покупки</Link>
							<button type="submit">Оформити замовлення</button>
						</div>
					</form>
				</div>
				<div className="order_line"></div>
				<div className="order_repeat-list">
					<ul className="repeat_items">
						{items.map(({ price, image, description, name, _id }) => {
                            return (
	<li className="repeat_item" key={_id}>
		<figure>
			<div className="count">{_id}</div>
			<img src={image} alt={name} />
		</figure>
		<div className="description">
			<p>{name}</p>
			<p>{description}</p>
		</div>
		<span className="price">{`${price} грн`}</span>
	</li>
                            );
                        })}
					</ul>
					<div className="flex_count-order">
						<h2>Всего:</h2>
						<span>123123 грн</span>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Content;
