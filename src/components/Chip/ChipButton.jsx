import React from "react";
import Bag from "components/Chip/img/shopping_bag.svg";

const ChipButton = ({ addToCart, text }) => {
    return (
	<button className="shopping_bag is_active-bag"

		onClick={addToCart}
	>
		{text}
		{" "}
		<Bag />
	</button>
    );
};

export default ChipButton;