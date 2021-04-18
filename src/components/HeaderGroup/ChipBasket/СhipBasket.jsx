import React from "react";
import "./СhipStyle.scss";
import Chip from "./chip.svg";
import { useSelector } from "react-redux";
import { getShoppingCartCount } from "selectors/shoppingCart.selectors";

const ChipBasket = () => {
  const counter = useSelector(getShoppingCartCount);
    return (
	<div className="basket_container">
		<div className="counter">{counter}</div>
		<Chip />
		{/*<img src={<Chip/>} alt=""/>*/}
	</div>
    );
};

export default ChipBasket;
