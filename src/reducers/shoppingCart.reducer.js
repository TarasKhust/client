import { fromJS, List } from "immutable";
import { store } from "store";
import * as types from "actions/shoppingCart.actions";

/**
 * Reducer access key
 * @type {string}
 * @memberOf shoppingCartReducer
 * @access protected
 * @exports
 */
export const key = types.section;

/**
 *
 * @returns {*}
 */
export const init = () => {
	return store.injectReducer(types.section, reducer);
};

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
	 * @type {List}
	 */
	cartItems: List(),

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
function reducer(state = initState, action) {
  console.log(state.toJS());

	switch (action.type) {
		case types.TO_DEFAULT:
			return initState;

		case types.ADD_TO_CART:
			return (
				state
				.merge("cartItems", fromJS({ ...action.cartItems, count: 1 }))
				.set("isEmpty", action.isEmpty));

	  case types.UPDATE_CART:
		return (
			state
			.updateIn(["cartItems", "_id"], genres => genres.push("Wizards"))
		);

	  case types.REMOVE_FROM_CART:
		return state
		.set("cartItems", fromJS({ ...action.cartItems, count: 1 }));

		default:
			return state;
	}
}

export default reducer;
