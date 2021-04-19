import React, { useState } from "react";
import "./ChipStyle.scss";
import Bag from "./img/shopping_bag.svg";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "actions/shoppingCart.actions";
import * as selectors from "selectors/shoppingCart.selectors";

const Chip = ({ item }) => {
    const dispatch = useDispatch();
    const inputValue = useSelector(selectors.getCurrentValue(item._id));

    const [isCount, setCount] = useState(false);

    const addToCart = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
        dispatch(actions.addToCart(item));
        setCount(true);
    };

  const updateCart = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    const value = evt.currentTarget.value;
    const name = evt.currentTarget.name;

    console.log(value);

    if (value.length > 3) {
      return;
    }

    if (Number.isNaN(parseInt(value))) {
      return dispatch(actions.updateCart(name, ""));
    }

	dispatch(actions.updateCart(name, parseInt(value)));
  };

  const increment = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(actions.incrementAddToCart(item._id));
  };

  const decrement = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (inputValue === 0) {
	  return;
    }

    dispatch(actions.decrementAddToCart(item._id));
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
			value={inputValue}
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
