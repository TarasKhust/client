import { fromJS } from "immutable";
import * as types from "actions/shoppingCart.actions";

/**
 * Reducer default state
 * @type {Immutable.Map}
 * @memberOf shoppingCartReducer
 * @access protected
 * @exports
 */
export const initState = fromJS({

	/**
	 * Cart is empty flag
	 * @type {boolean}
	 */
	isEmpty: false,

	/**
	 * Full Cart data
	 * @type {Array}
	 */
	cartItems: [],

	/**
	 * Currency data for cart prices
	 * @type {Object}
	 */
	currency: {},

	/**
	 * Display currency without cents
	 * @type {boolean}
	 */
	isNoCentsCurrency: false,

	/**
	 * Tax display name (Tax, GST for example)
	 * @type {String}
	 */
	taxName: "Tax",
});

/**
 * Reduce function to inject by key
 * @namespace shoppingCartReducer
 * @requires shoppingCartActions
 * @param state {Immutable.Map}
 * @param action {Object}
 * @returns {Immutable.Map}
 *
 * @example
 *
 * 		import shoppingCartReducer, { key as shoppingCartKey } from "reducers/shoppingCart.reducer";
 *
 * 		store.injectReducer(shoppingCartKey, shoppingCartReducer);
 *
 */
export default (state = initState, { type, ...props } = {}) => {
	switch (type) {
		case types.TO_DEFAULT:
			return initState;

		case types.ADD_TO_CART:
			return (
				state
		         .set("cartItems", state.get("cartItems").push(fromJS({ ...props.cartItems, count: 1 })))
				 .set("isEmpty", true)

		);

	  case types.UPDATE_CART:
		return (
	    state.setIn(["cartItems", props.cartItems.index, "count"],
		    props.cartItems.count
			)
		);

	  case types.INCREMENT:
		return (
			state.setIn(["cartItems", props.cartItems.index, "count"],
				state.get("cartItems").toJS()
				.find((item) => item._id === props.cartItems._id)["count"] + 1
			)
		);

	  case types.DECREMENT:
		return (
			state.setIn(["cartItems", props.cartItems.index, "count"],
				state.get("cartItems").toJS()
				.find((item) => item._id === props.cartItems._id)["count"] - 1
			)
		);

	  case types.REMOVE_FROM_CART:
		return state.set("cartItems", state.get("cartItems")
		.remove(state.get("cartItems")
		.findIndex(id => id !== props.id)));

		default:
			return state;
	}
};
