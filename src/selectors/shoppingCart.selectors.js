/**
 * @namespace shoppingCartSelectors
 * @requires shoppingCartReducer
 *
 */

import { createSelector } from "reselect";
import { key } from "reducers/shoppingCart.reducer";

/**
 * Get full state of shopping cart
 * @memberOf shoppingCartSelectors
 * @returns {Object}
 * @param state
 */

export const getState = ({ [key]: e }) => e.toJS();

/**
 * Get current status of cart requests
 * @memberOf shoppingCartSelectors
 * @returns {boolean}
 * @param state
 */
export const getShoppingCart = (state) => getState(state).cartItems;

/**
 * Get current status of cart requests
 * @memberOf shoppingCartSelectors
 * @returns {boolean}
 * @param state
 */
export const getShoppingCartCount = createSelector(
	[getShoppingCart],
	(items) => {
	  return items.reduce((prev, cur) => {
	   return prev + cur.count;
	 }, 0);
	}

);

/**
 * Get status of empty cart state
 * @memberOf shoppingCartSelectors
 * @returns {boolean}
 * @param state
 */
export const getIsEmpty = (state) => getState(state).isEmpty;
