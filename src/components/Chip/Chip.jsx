import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import "./ChipStyle.scss";
import Bag from "./img/shopping_bag.svg";
import { ShoppingCardContext } from "store/ShoppingCard";

const Chip = ({ item }) => {
    const { actions, selectors } = useContext(ShoppingCardContext);

	const { cartItems } = selectors.getState();
    const value = cartItems.find(items => items._id === item._id)?.count;
    const [isCount, setCount] = useState(false);

    const addToCart = () => {
        actions.addToCart(item);
        setCount(true);
    };

  const updateCart = (evt) => {
    const value = evt.currentTarget.value;
    const name = evt.currentTarget.name;

    if (value.length > 3) {
      return;
    }

    if (Number.isNaN(parseInt(value))) {
      return actions.updateCart(name, "");
    }

	actions.updateCart(name, parseInt(value));
  };

  const increment = () => {
    actions.incrementAddToCart(item._id);
  };

  const decrement = () => {
    if (value === 0) {
	  return;
    }

    actions.decrementAddToCart(item._id);
  };

  const onBlur = (evt) => {
	setCount(false);

	return evt.currentTarget.value;
  };

  const onFocus = (evt) => {

  };

  const onMouseLeave = () => {
	setCount(false);
  };

    if (isCount) {
      return (
	<div className="bag_counter-row" >
		<span
			className=""
			onClick={decrement}
		>
			-
		</span>
		<input
			key={item._id}
			name={item._id}
			onChange={updateCart}
			value={value}
			type="number"
			className="bag_counter"
			maxLength={3}
		/>
		<span className=""
			onClick={increment}
		>
			+
		</span>
	</div>
      );
    }

    return (
	<button className="shopping_bag is_active-bag"
		onClick={addToCart}
	>
		<Bag />
	</button>
    );
};

Chip.propTypes = {
    item: PropTypes.object,
};

export default Chip;
