import React, { Fragment } from "react";
import "./ListProduct.scss";
import Chip from "components/Chip/Chip";
import { Link } from "react-router-dom";

const ListProduct = ({ image, vendor, price, name, id, count, packaging }) => {
    return (
	<li className="product_item">
		<Link
			className="content_image"
			to={{
					pathname: `/product_details/${id}`,
			}}
		>
			<img src={`https://servercrm.herokuapp.com/api/files/images/${image[0]}`} alt={name} />
		</Link>
		<div className="content_description">
			<div className="article_row">
				<span>
					Артикул:
					{vendor}
				</span>
				<span>
					{" "}
					Набір:
					{packaging}
				</span>
			</div>
			<div className="desc_title">{name}</div>
			<div className="shop_link">
				<span className="price">{`${price} грн`}</span>
				<Chip item={{ id, name, image, price, vendor, count }} />
			</div>
		</div>
	</li>
    );
};

export default ListProduct;