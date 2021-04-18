import React from "react";
import "./ChipStyle.scss";
import Bag from "./img/shopping_bag.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from "actions/shoppingCart.actions";

const Chip = ({ item }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(actions.addToCart(item));
    };

    return (
	<button className="shopping_bag is_active-bag"
		onClick={() => addToCart()}
	>
		<Bag />
	</button>
    );
};

Chip.propTypes = {
    onClick: PropTypes.func,
};

/**
 * @param onClick
 */
export default Chip;
