import React, { Fragment } from "react";
import "./ListProduct.scss";
import Chip from "components/Chip/Chip";

const ListProduct = ({ image, vendor, price, name, description, _id, overview, packaging }) => {
    return (
	<li className="product_item">
		<figure className="content_image">
			<img src={image} alt="" />
		</figure>
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
			<div className="desc_title">{description}</div>
			<div className="shop_link">
				<span className="price">{`${price} грн`}</span>
				<Chip item={{ _id, name, image, description, price, vendor }} />
			</div>
		</div>
	</li>
    );
};

export default ListProduct;