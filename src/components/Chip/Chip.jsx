import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import "./ChipStyle.scss";
import { ShoppingCardContext } from "store/ShoppingCard";
import InputChip from "components/Chip/InputChip";
import ChipButton from "components/Chip/ChipButton";

const Chip = ({ item, inputShow, btn_text }) => {
    console.log(item);
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

    if (isCount || inputShow) {
      return (
	<InputChip
		decrement={decrement}
		increment={increment}
		item={item}
		value={value}
		updateCart={updateCart}
		inputShow={inputShow}
	/>
      );
    }

    return (
	<ChipButton text={btn_text} addToCart={addToCart} />
    );
};

Chip.propTypes = {
    item: PropTypes.object,
    inputShow: PropTypes.bool,
    btn_text: PropTypes.string,
};

export default Chip;
