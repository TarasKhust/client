import React from "react";

const InputShip = ({ increment, decrement, item, value, updateCart, inputShow }) => {
    return (
	<div
		className={`bag_counter-row ${!inputShow ? "" : "quantity_inner"}`}
	>
		<span
			className=""
			onClick={decrement}
		>
			-
		</span>
		<input
			key={item.id}
			name={item.id}
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
};

export default InputShip;