/**
 * Shopping Cart actions
 * @namespace shoppingCartActions
 * @requires shoppingCartReducer
 * @requires shoppingCartSelectors
 *
 */

export const section = "shoppingCartStore";

export const ADD_TO_CART = "ADD_TO_CART";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UPDATE_CART = "UPDATE_CART";
export const TO_DEFAULT = "TO_DEFAULT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EDIT_CART = "EDIT_CART";

/**
 * @memberOf shoppingCartActions
 * @return {{type: string}}
 */
export const toDefault = () => ({
	type: TO_DEFAULT,
});

/**
 * @memberOf shoppingCartActions
 * @param product
 * @return {{type: string, cartItems}}
 */
export const addToCart = (product) => (dispatch, getState) => {
  /*
   * const state = getState()[section];
   *
   * const items = state.getIn(["cartItems"]).toJS();
   *
   * if (items.length > 0) {
   *   const result = items.find(({ _id }) => _id === product._id);
   *   console.log(result);
   * }
   */

  dispatch({
    type: ADD_TO_CART,
    cartItems: product,
});
};

/**
 * @memberOf shoppingCartActions
 * @return {{type: string, cartItems}}
 * @param _id
 * @param count
 */
export const updateCart = (_id, count = 1) => ({
      type: UPDATE_CART,
      cartItems: { _id, count },
});

/**
 * @memberOf shoppingCartActions
 * @param productId
 * @return {{id, type: string}}
 */
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  id: productId,
});

/**
 * @memberOf shoppingCartActions
 * @param productId
 * @return {{productId: number, type: string}}
 */
export const editCart = (productId) => ({
  type: EDIT_CART,
  productId,
});

/**
 * @memberOf shoppingCartActions
 * @param _id
 * @return {{cartItems: {count, _id}, type: string}}
 */
export const increment = (_id) => ({
  type: INCREMENT,
  cartItems: { _id },
});

/**
 * @memberOf shoppingCartActions
 * @param _id
 * @return {{cartItems: {count: number, _id}, type: string}}
 */
export const decrement = (_id) => ({
  type: DECREMENT,
  cartItems: { _id },
});
