import React, { useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./ButtonStyle.scss";
import { ShoppingCardContext } from "store/ShoppingCard";
import BagSvg from "./img/shopping_bag.svg";

const Button = ({ showSvg, item, animation, text, mode, size, className, disabled, onClick, ...props }) => {
    const { actions, selectors } = useContext(ShoppingCardContext);

    const classNames = classnames(
        "btn",
        {
            [`btn_${mode}`]: Boolean(mode),
            [`btn_${size}`]: Boolean(size),
            [`${animation}`]: Boolean(animation),
        },
        className
    );

    /*
     * const addToCart = () => {
     *     actions.addToCart(item);
     * };
     */

    return (
	<button
		className={classNames}

		// onClick={addToCart}
		disabled={disabled}
		{...props}
	>
		{text}
		<BagSvg className={`${!showSvg ? "" : "visible"}`} />
	</button>
    );
};

Button.defaultProps = {
    mode: "yellow",
    size: "normal",
    className: "",
    animation: "",
    disabled: false,
};

Button.propTypes = {
    mode: PropTypes.oneOf(["yellow"]),
    size: PropTypes.oneOf(["normal"]),
    animation: PropTypes.oneOf(["draw-outline"]),
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    showSvg: PropTypes.bool,
};

/**
 *
 * @param text
 * @param mode
 * @param size
 * @param className
 * @param disabled
 * @param onClick
 * @param props
 * @param animation
 * @returns {JSX.Element}
 * @constructor
 */
export default Button;
