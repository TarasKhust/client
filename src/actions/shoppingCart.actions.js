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
  const state = getState.toJS();

  const index = state.cartItems.findIndex((item) => item.id === product.id);

  if (index >= 0) {
    return;
  }

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
export const updateCart = (id, count = 1) => (dispatch, getState) => {
  const state = getState.toJS();

  const index = state.cartItems.findIndex((item) => item.id === id);

  dispatch({
      type: UPDATE_CART,
      cartItems: { count, index },
  });
};

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
export const incrementAddToCart = (id) => (dispatch, getState) => {
  const state = getState.toJS();

  const index = state.cartItems.findIndex((item) => item.id === id);

  dispatch({
    type: INCREMENT,
    cartItems: { id, index },
});
};

/**
 * @memberOf shoppingCartActions
 * @param _id
 * @return {{cartItems: {count: number, _id}, type: string}}
 */
export const decrementAddToCart = (id) => (dispatch, getState) => {
  const state = getState.toJS();

  const index = state.cartItems.findIndex((item) => item.id === id);

  dispatch({
    type: DECREMENT,
    cartItems: { id, index },
  });
};
