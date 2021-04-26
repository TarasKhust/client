import React from "react";
import Bag from "components/Chip/img/shopping_bag.svg";

const ChipButton = ({addToCart}) => {
    return(
        <button className="shopping_bag is_active-bag"
                onClick={addToCart}
        >
            <Bag />
        </button>
    )
}

export default ChipButton