import React, { useContext } from "react";
import "./СhipStyle.scss";
import Chip from "./chip.svg";
import { ShoppingCardContext } from "store/ShoppingCard";

const ChipBasket = () => {
  const { selectors } = useContext(ShoppingCardContext);
  const counter = selectors.getShoppingCartCount();
    return (
	<div className="basket_container">
		<div className="counter">{counter}</div>
		<Chip />
		{/*<img src={<Chip/>} alt=""/>*/}
	</div>
    );
};

export default ChipBasket;
