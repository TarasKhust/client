import React, { useState } from "react";
import "./ChipStyle.scss";
import Bag from "./img/shopping_bag.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from "actions/shoppingCart.actions";

const Chip = ({ item }) => {
    const dispatch = useDispatch();
    const [isCount, setCount] = useState(false);

    const addToCart = (evt) => {
        dispatch(actions.addToCart(item));

        return evt.currentTarget.value;
    };

  const updateCart = (evt) => {
    const count = evt.currentTarget.value;
	dispatch(actions.updateCart(item._id, count));
  };

  const onBlur = (evt) => {
	setCount(false);

	return evt.currentTarget.value;
  };

  const removeFromCart = () => {
	dispatch(actions.removeFromCart(item._id));
  };

    const inputCount = () => {
      dispatch(actions.addToCart(item));
      setCount(true);
    };

    if (isCount) {
      return (
	<div className="bag_counter-row" >
		<span className=""
			onClick={removeFromCart}
		>
			-
		</span>
		<input
			onChange={(evt) => updateCart(evt)}
			type="number"
			className="bag_counter"
			defaultValue={1}
		/>
		<span className=""
			onClick={addToCart}
		>
			+
		</span>
	</div>
      );
    }

    return (
	<button className="shopping_bag is_active-bag"
		onClick={inputCount}
	>
		<Bag />
	</button>
    );
};

Chip.propTypes = {
    item: PropTypes.object,
};

export default Chip;
