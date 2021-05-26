import React, { useContext, useState } from "react";
import "./ProductsOrderStyle.scss";
import Checkbox from "components/Checkbox/Checkbox";
import { Link } from "react-router-dom";
import InputField from "components/InputField/InputField";
import { useForm } from "react-hook-form";
import { ShoppingCardContext } from "store/ShoppingCard";

const Content = () => {
	const { actions, selectors } = useContext(ShoppingCardContext);
	const items = selectors.getShoppingCart();
	const sum = selectors.getShoppingCartPrice();

	const [delivery, setDelivery] = useState("");
	const [toggleSummary, setToggleSummary] = useState(false);
	const [buttonText, setButtonText] = useState("Детальніше про замовлення");
	const { handleSubmit, formState: { errors }, register } = useForm();
	const express = delivery === "express";
	const postOffice = delivery === "postOffice";

	const deliveryChange = (evt) => {
		const target = evt.currentTarget.name;
		setDelivery(target);
	};

	const onSubmit = data => console.log({ data }, "data");

	const handleToggleSummary = () => {
		setToggleSummary(!toggleSummary);

		if (!toggleSummary){
			setButtonText("Приховати деталі замовлення");
		} else {
			setButtonText("Детальніше про замовлення");
		}
	};

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
					<form autoComplete="off" className="submit_form" onSubmit={handleSubmit(onSubmit)} >
						<div className="form_input-row">
							<InputField

								// onChange={handleChange}
								placeholder=" "
								type="text"
								name="name"
								label="ПІБ*"
								errors={errors}
								register={register("name", {
									required: "Поле ПІБ обов'язкове  для заповнення",
									pattern: {
										message: "Ім'я та прізвище будьте ласкаві",
										value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
									},
								})}
							/>
							{errors.name && <p>{errors.name.message}</p>}
						</div>
						<div className="form_input-row">
							<InputField

								// onChange={handleChange}
								placeholder=" "
								type="text"
								name="phone"
								label="Телефон*"
								errors={errors}
								defaultValue="+380"
								register={register("phone", {
									required: "Поле Телефон обов'язкове  для заповнення",
									pattern: {
										message: "Введіть коректний номер телефону",
										value: /^[0-9]{10}$/,
									},
								})}
							/>
							{errors.phone && <p>{errors.phone.message}</p>}
						</div>
						<div className="form_input-row">
							<InputField

								// onChange={handleChange}
								placeholder=" "
								type="text"
								label="Email"
								name="email"
								errors={errors}
								register={register("email", {
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "Невірна адреса електронної пошти",
									},
								})}
							/>
							{errors.email && <p>{errors.email.message}</p>}
						</div>
						<div className="flex_checked-list">
							<Checkbox
								mode="yellow"
								name="postOffice"
								label="Доставка у відділення НП"
								checked={postOffice}
								onChange={deliveryChange}
							/>
							<Checkbox
								mode="yellow"
								name="express"
								label="Доставка кур'єром"
								checked={express}
								onChange={deliveryChange}
							/>
						</div>
						{postOffice
							&&						<div className="checked_visible">
								<div className="form_input-row">
									<InputField

									// onChange={handleChange}
										placeholder=" "
										type="text"
										name="city"
										label="Місто*"
										errors={errors}
										register={register("city", {
										required: "Поле Місто обов'язкове  для заповнення",
										minLength: {
											value: 3,
											message: "Це поле повинне містити більше 3 символів",
										},
									})}
									/>
									{errors.city && <p>{errors.city.message}</p>}
								</div>

								<div className="form_input-row">
									<InputField

									// onChange={handleChange}
										placeholder=" "
										type="text"
										name="post_office"
										label="Відділення Нова Пошта №*"
										errors={errors}
										register={register("post_office", {
										required: "Поле відділення Нова Пошта № обов'язкове  для заповнення",
										pattern: {
											value: /[1-9]+/,
											message: "Це поле повинне містити тільки числа",
										},
										minLength: {
											value: 1,
											message: "Це поле повинне містити більше 1 символа",
										},
									})}
									/>
									{errors.post_office && <p>{errors.post_office.message}</p>}
								</div>

               </div>}
						{express
						&& <div className="checked_visible">
							<div className="form_input-row">
								<InputField

									// onChange={handleChange}
									placeholder=" "
									type="text"
									name="city"
									label="Місто*"
									errors={errors}
									register={register("city", {
										required: "Поле Місто обов'язкове  для заповнення",
										minLength: {
											value: 3,
											message: "Це поле повинне містити більше 3 символів",
										},
									})}
								/>
								{errors.city && <p>{errors.city.message}</p>}
							</div>
							<div className="form_input-row">
								<InputField

									// onChange={handleChange}
									placeholder=" "
									type="text"
									name="street"
									label="Вулиця*"
									errors={errors}
									register={register("street", {
										required: "Поле Вулиця обов'язкове  для заповнення",
										minLength: {
											value: 3,
											message: "Це поле повинне містити більше 3 символів",
										},
									})}
								/>
								{errors.street && <p>{errors.street.message}</p>}
							</div>
							<div className="checked_row">
								<div className="form_input-row">
									<InputField

										// onChange={handleChange}
										placeholder=" "
										type="text"
										name="house_number"
										label="№ будинку*"
										errors={errors}
										register={register("house_number", {
											required: "Поле № будинку обов'язкове  для заповнення",
											pattern: {
												value: /[1-9]+/,
												message: "Це поле повинне містити тільки числа",
											},
											minLength: {
												value: 1,
												message: "Це поле повинне містити більше 1 символа",
											},
										})}
									/>
									{errors.house_number && <p>{errors.house_number.message}</p>}
								</div>
								<div className="form_input-row">
									<InputField

										// onChange={handleChange}
										placeholder=" "
										type="text"
										name="apartment_number"
										label="№ квартири"
										errors={errors}
										register={register("apartment_number", {
											pattern: {
												value: /\d+/,
												message: "Це поле повинне містити тільки числа",
											},
											minLength: {
												value: 1,
												message: "Це поле повинне містити більше 1 символа",
											},
										})}
									/>
									{errors.apartment_number && <p>{errors.apartment_number.message}</p>}
								</div>
							</div>
         </div>}
						<div className="checked_payment-type">
							<h3 className="payment_title">
								Спосіб оплати
							</h3>
							<div className="flex_checked-list">
								{paymentType.map((item, index) => {
                                    return (
	<Checkbox
		mode="yellow"
		key={index}
		name={item}
		label={item}
	/>
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
						{items.map(({ price, image, description, name, id, count }) => {
                            return (
	<li className="repeat_item" key={id}>
		<figure>
			<div className="count">{count}</div>
			<img
				src={`https://servercrm.herokuapp.com/api/files/images/200X200/${image[0]}`}
				alt={name}
			/>
		</figure>
		<div className="description">
			<p>{name}</p>
			{/*<p>{description}</p>*/}
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
							<span>{`${sum} грн`}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Content;
