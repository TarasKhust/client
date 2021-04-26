import React, { useContext } from "react";
import "./СhipStyle.scss";
import Chip from "./chip.svg";
import { ShoppingCardContext } from "store/ShoppingCard";
import {Link} from "react-router-dom";

const ChipBasket = () => {
  const { selectors } = useContext(ShoppingCardContext);
  const counter = selectors.getShoppingCartCount();
    return (
	<Link to='/shopping_card' className="basket_container">
		<div className="counter">{counter}</div>
		<Chip />
		{/*<img src={<Chip/>} alt=""/>*/}
	</Link>
    );
};

export default ChipBasket;
