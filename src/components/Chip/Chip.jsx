import React, { useState, Fragment } from "react";
import "./ChipStyle.scss";
import Bag from "./img/shopping_bag.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from "actions/shoppingCart.actions";
import { Input } from "semantic-ui-react";

const Chip = ({ item }) => {
    const dispatch = useDispatch();
    const count = 1
    const [isCount, setCount] = useState(false);

    const addToCart = (evt) => {
        dispatch(actions.addToCart(item));

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
        <div className='bag_counter-row' >
		<span className=""
			onClick={removeFromCart}
		>
			-
		</span>
        <input
            onChange={(evt) => addToCart(evt)}
            type="number"
            className="bag_counter"
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
