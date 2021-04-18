import React from "react";
import "./CatalogStyle.scss";

import stakan from "./img/stakan.png";
import bokal from "./img/bokal.png";
import jug from "./img/jug.png";
import plates from "./img/plates.png";
import cutlery from "./img/cutlery.png";

import services from "./img/services.png";
import Button from "components/BtnGroup/Button";

const Catalog = () => {
    return (
	<section className="catalog_list-container">
		<h2 className="catalog_title">Каталог</h2>
		<div className="catalog_wrapper">
			<div className="catalog_list">
				<a onClick={() => location.href = "pasabahce"} className="catalog_list-item row_large">
					<div className="cat_item">
						<figure className="cat_image">
							<img src={services} alt="" />
						</figure>
						<span className="cat_title">Столовые сервизы</span>
					</div>
				</a>
				<a href="#" className="catalog_list-item column_small">
					<div className="cat_item">
						<span className="cat_title">Стаканы</span>
						<figure className="cat_image">
							<img src={stakan} alt="stakan" />
						</figure>
					</div>
				</a>
				<a href="#" className="catalog_list-item column_small">
					<div className="cat_item">
						<span className="cat_title">Бокалы</span>
						<figure className="cat_image">
							<img src={bokal} alt="" />
						</figure>
					</div>
				</a>
			</div>
			<div className="catalog_list">
				<a href="#" className="catalog_list-item column_small">
					<div className="cat_item">
						<span className="cat_title">Кувшины</span>
						<figure className="cat_image">
							<img src={jug} alt="" />
						</figure>
					</div>
				</a>
				<a href="#" className="catalog_list-item column_small">
					<div className="cat_item">
						<span className="cat_title">Тарелки</span>
						<figure className="cat_image">
							<img src={plates} alt="" />
						</figure>
					</div>
				</a>
				<a href="#" className="catalog_list-item row_large">
					<div className="cat_item">
						<figure className="cat_image">
							<img src={cutlery} alt="" />
						</figure>
						<span className="cat_title">Столовые приборы</span>
					</div>
				</a>
			</div>
			<div className="catalog_link">
				<Button text="Магазин" animation="draw-outline" />
			</div>
		</div>
	</section>
    );
};

export default Catalog;
