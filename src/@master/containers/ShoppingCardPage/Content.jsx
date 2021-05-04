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

    if (!isEmpty || !items){
    	return (
	<h2>Корзина пустая</h2>
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
					<span className="head_item center_row t-small">Артикул</span>
					<span className="head_item center_row t-small">Ціна</span>
					<span className="head_item center_row t-small">Кількість</span>
					<span className="head_item end_row t-small">Всього</span>
					<span className="head_item"></span>
				</div>
				{isEmpty && items.map(({ _id, name, vendor, description, image, price, count }) => {
					return (
						<div className="shopping_list" key={_id}>
							<div className="list_item-img">
								<img src={image} alt={description} />
							</div>
							<div className="list_item-info">
								<p className="info-title">{description}</p>
								<p className="info-title">{name}</p>
							</div>
							<div className="list_item list_item-vendor">{vendor}</div>
							<div className="list_item list_item-price">{`${price} грн`}</div>
							<div className="list_item list_item-actions">
								<Chip
									inputShow
									item={{ _id, name, image, description, price, vendor }}
								/>
							</div>
							<div className="list_item item_total-count">
								<p>{`${price * count}грн`}</p>
							</div>
							<div className="list_item-remove">
								<Remove onClick={() => actions.removeFromCart(_id)} />
							</div>
						</div>
					);
				})}
			</div>
			{/*		<table className="chip_basket-table" cellPadding="0" cellSpacing="0">*/}
			{/*			<tbody>*/}
			{/*				<tr className="chip_row-head">*/}
			{/*					<th className="head_title t-large">Продукт</th>*/}
			{/*					<th></th>*/}
			{/*					<th className="head_title vendor t-small">Артикул</th>*/}
			{/*					<th className="head_title t-small">Ціна</th>*/}
			{/*					<th className="head_title t-small">Кількість</th>*/}
			{/*					<th className="head_title in_all t-small">Всього</th>*/}
			{/*					<th></th>*/}
			{/*				</tr>*/}
			{/*				{isEmpty && items.map(({ _id, name, vendor, description, image, price, count }) => {*/}
			{/*                        return (*/}
			{/*<tr className="chip_row-items" key={_id}>*/}
			{/*	<td className="item_vis-l">*/}
			{/*		<div>*/}
			{/*			<figure>*/}
			{/*				<img src={image} alt="" />*/}
			{/*			</figure>*/}
			{/*		</div>*/}
			{/*	</td>*/}
			{/*	<td className="chip_item-desc">*/}
			{/*		<p className="chip_item-title">*/}
			{/*			{description}*/}
			{/*		</p>*/}
			{/*		<p className="chip_item-title">*/}
			{/*			{name}*/}
			{/*		</p>*/}
			{/*	</td>*/}
			{/*	<td className="chip_item-desc vendor">*/}
			{/*		{vendor}*/}
			{/*		{" "}*/}
			{/*	</td>*/}
			{/*	<td className="chip_item-desc">{`${price} грн`}</td>*/}
			{/*	<td className="chip_item-desc quantity">*/}
			{/*		<Chip*/}
			{/*			inputShow*/}
			{/*			item={{ _id, name, image, description, price, vendor }}*/}
			{/*		/>*/}
			{/*	</td>*/}
			{/*	<td className="chip_item-desc desc-gr">{`${price * count}грн`}</td>*/}
			{/*	<td className="remove">*/}
			{/*		<Remove onClick={() => actions.removeFromCart(_id)} />*/}
			{/*	</td>*/}
			{/*</tr>*/}
			{/*                        );*/}
			{/*                    })}*/}
			{/*			</tbody>*/}
			{/*		</table>*/}
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
