/**
 * @namespace shoppingCartSelectors
 * @requires shoppingCartReducer
 *
 */

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
export const getShoppingCart = (state) => getState(state).cart;

/**
 * Get status of empty cart state
 * @memberOf shoppingCartSelectors
 * @returns {boolean}
 * @param state
 */
export const getIsEmpty = (state) => getState(state).isEmpty;
