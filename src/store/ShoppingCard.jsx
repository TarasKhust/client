import React, { useReducer, createContext, useMemo } from "react";
import PropTypes from "prop-types";

import shoppingCardReducer, { initState } from "reducers/shoppingCart.reducer";
import * as shoppingCardActions from "actions/shoppingCart.actions";
import * as shoppingCardSelectors from "selectors/shoppingCart.selectors";
import { bindReactActionCreators, bindReactSelectors } from "helpers/storeHelpers";

const ShoppingCardContext = createContext({});

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ShoppingCardProvider = (props) => {
  const {
	children,
  } = props;

  const [state, dispatch] = useReducer(shoppingCardReducer, initState);

  /**
   * @type {shoppingCardActions}
   */
  const actions = bindReactActionCreators(shoppingCardActions, dispatch, state);

  /**
   * @type {shoppingCardSelectors}
   */
  const selectors = bindReactSelectors(shoppingCardSelectors, state);

  const value = useMemo(() => ({
	actions,
    selectors,
  }), [actions, selectors]);

  return (
	  <ShoppingCardContext.Provider value={value}>
		{children}
	  </ShoppingCardContext.Provider>
  );
};

ShoppingCardProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export {
  ShoppingCardContext,
  ShoppingCardProvider,
};

export default ShoppingCardProvider;
