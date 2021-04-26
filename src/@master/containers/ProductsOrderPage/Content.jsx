import React, { useState } from "react";
import "./ProductsOrderStyle.scss";
import Checkbox from "components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import InputField from "components/InputField/InputField";

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

	const [inputValue, setInputValue] = useState({
		name: "",
		phone: "",
		email: "",
		city: "",
		post_office: "",
		street: "",
		house_number: "",
		apartment_number: "",
	});

	const [toggleSummary, setToggleSummary] = useState(false);
	const [buttonText, setButtonText] = useState("Детальніше про замовлення");

	const handleToggleSummary = () => {
		setToggleSummary(!toggleSummary);

		if (!toggleSummary){
			setButtonText("Приховати деталі замовлення");
		} else {
			setButtonText("Детальніше про замовлення");
		}
	};

	const deliveryType = [
        "Доставка у відділення НП",
        "Доставка кур'єром",
    ];

    const paymentType = [
        "Повна оплата на карту",
        "Накладеним платежем",
    ];

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputValue((prev) => ({
			...prev,
			[name]: value,
		}));

		console.log(inputValue);
	};

    return (
	<div className="tut-posuda_order">
		<div className="order_inner">
			<h2 className="order_title">Оформлення замовлення</h2>
			<div className="order_content">
				<div className="order_form-submit">
					<h3 className="form_title">Адреса доставки</h3>
					<form action="" className="submit_form">
						<InputField
							onChange={handleChange}
							placeholder=" "
							type="text"
							name="name"
							label="ФИО*"
						/>
						<InputField
							onChange={handleChange}
							placeholder=" "
							type="phone"
							name="phone"
							label="Телефон*"
						/>
						<InputField
							onChange={handleChange}
							placeholder=" "
							type="email"
							name="email"
							label="Email"
						/>
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
							<InputField
								onChange={handleChange}
								placeholder=" "
								type="text"
								name="city"
								label="Город*"
							/>
							<InputField
								onChange={handleChange}
								placeholder=" "
								type="text"
								name="post_office"
								label="Відділення Нова Пошта №*"
							/>
						</div>
						<div className="checked_visible">
							<InputField
								onChange={handleChange}
								placeholder=" "
								type="text"
								name="city"
								label="Город*"
							/>
							<InputField
								onChange={handleChange}
								placeholder=" "
								type="text"
								name="street"
								label="Вулиця*"
							/>
							<div className="checked_row">
								<InputField
									onChange={handleChange}
									placeholder=" "
									type="text"
									name="house_number"
									label="№ дома*"
								/>
								<InputField
									onChange={handleChange}
									placeholder=" "
									type="text"
									name="apartment_number"
									label="№ квартиры"
								/>
							</div>
						</div>
						<div className="checked_payment-type">
							<h3 className="payment_title">
								Спосіб оплати
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
					<ul
						className={`repeat_items ${!toggleSummary ? "" : "set_toggle-repeat_items"}`}
					>
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
						<div className="order_summary-toggle">
							<button
								className={`toggle ${!toggleSummary ? "" : "set_toggle"}`}
								onClick={handleToggleSummary}
							>
								{buttonText}
								<svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
									<path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" strokeLinecap="round" strokeWidth="5" />
								</svg>
							</button>
						</div>
						<div className="order_summary">
							<h2>Всього:</h2>
							<span>123123 грн</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Content;
