import React, { useContext } from "react";
import "./ShoppingCardPage.scss";
import Remove from "./img/cancel.svg";
import Chip from "components/Chip/Chip";
import { ShoppingCardContext } from "store/ShoppingCard";

const Content = () => {
    const { actions, selectors } = useContext(ShoppingCardContext);

    const items = selectors.getShoppingCart();

    const sum = selectors.getShoppingCartPrice();

    const isEmpty = selectors.getIsEmpty();

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
					{isEmpty && items.map(({ _id, name, vendor, description, image, price, count }) => {
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
			<Chip
				inputShow
				item={{ _id, name, image, description, price, vendor }}
			/>
		</td>
		<td className="chip_item-desc desc-gr">{`${price * count}грн`}</td>
		<td className="remove">
			<Remove onClick={() => actions.removeFromCart(_id)} />
		</td>
	</tr>
                            );
                        })}
				</tbody>
			</table>
			<div className="chip_basket-row">
				<span className="total_basket-price">{`${sum} грн`}</span>
			</div>
			{sum > 0 && (
				<div className="chip_basket-row">
					<button className="submit_basket">оформити замовлення</button>
				</div>)}
		</div>
	</div>
    );
};

export default Content;
