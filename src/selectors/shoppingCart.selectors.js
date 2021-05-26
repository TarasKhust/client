/**
 * @namespace shoppingCartSelectors
 * @requires shoppingCartReducer
 *
 */

import { createSelector } from "reselect";

/**
 * Get full state of shopping cart
 * @memberOf shoppingCartSelectors
 * @returns {Object}
 * @param state
 */

export const getState = (state) => state.toJS();

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
 * @returns {number}
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
 * Get current status of cart requests
 * @memberOf shoppingCartSelectors
 * @returns {number}
 * @param state
 */
export const getShoppingCartPrice = createSelector(
	[getShoppingCart],
	(items) => {
	  console.log(items);
	  return items.reduce((prev, cur) => {
		return prev + cur.price * cur.count;
	  }, 0);
	}

);

/**
 * Get current status of cart requests
 * @memberOf shoppingCartSelectors
 * @returns {OutputSelector<unknown, *, (res: (List|*)) => *>}
 * @param id
 */
export const getCurrentValue = (id) => createSelector(
	[getShoppingCart],
	(items) => {
	  const value = items.find(item => item.id === id);
	  return value?.count;
	}

);

/**
 * Get status of empty cart state
 * @memberOf shoppingCartSelectors
 * @returns {boolean}
 * @param state
 */
export const getIsEmpty = (state) => getState(state).isEmpty;
