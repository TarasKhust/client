import React, { useContext } from "react";
import "./ShoppingCardPage.scss";
import Remove from "./img/cancel.svg";
import Chip from "components/Chip/Chip";
import { ShoppingCardContext } from "store/ShoppingCard";
import { Link } from "react-router-dom";

const Content = () => {
    const { actions, selectors } = useContext(ShoppingCardContext);

    const items = selectors.getShoppingCart();

    const sum = selectors.getShoppingCartPrice();

    const isEmpty = selectors.getIsEmpty();

    if (!isEmpty || !items.length){
    	return (
	<div className="tut-posuda_chip is_empty-chip">
		<div className="chip_inner">
			<h2 className="chip_title">
				Ваш кошик порожній
			</h2>
		</div>
	</div>
		);
	}

    return (
	<div className="tut-posuda_chip">
		<div className="chip_inner">
			<h2 className="chip_title">
				Корзина
			</h2>
			<div className="shopping_cart-list">
				<div className="shopping_cart-head">
					<span className="head_item t-large">Продукт</span>
					<span className="head_item"></span>
					<span className="head_item center_row t-small vendor">Артикул</span>
					<span className="head_item center_row t-small">Ціна</span>
					<span className="head_item center_row t-small">Кількість</span>
					<span className="head_item end_row t-small total">Всього</span>
					<span className="head_item"></span>
				</div>
				{isEmpty && items.map(({ id, name, vendor, description, image, price, count }) => {
					return (
						<div className="shopping_list" key={id}>
							<div className="list_item-img">
								<img
									src={`https://servercrm.herokuapp.com/api/files/images/200X200/${image[0]}`}
									alt={description}
								/>
							</div>
							<div className="list_item list_item-info">
								<p className="info-title">{name}</p>
							</div>
							<div className="list_item list_item-vendor">{vendor}</div>
							<div className="list_item list_item-price">{`${price} грн`}</div>
							<div className="list_item list_item-actions">
								<Chip
									inputShow
									item={{ id, name, image, description, price, vendor, count }}
								/>
							</div>
							<div className="list_item item_total-count">
								<p>{`${price * count}грн`}</p>
							</div>
							<div
								className="list_item list_item-remove"
								onClick={() => actions.removeFromCart(id)}
							>
								<Remove />
							</div>
						</div>
					);
				})}
			</div>
			<div className="chip_basket-row">
				<span className="total_basket-price">{`${sum} грн`}</span>
			</div>
			{sum > 0 && (
				<div className="chip_basket-row">
					<Link to="/order" className="submit_basket">оформити замовлення</Link>
				</div>)}
		</div>
	</div>
    );
};

export default Content;
