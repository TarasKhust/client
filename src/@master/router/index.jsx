import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { store } from "store";
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
		</Router>
	</Provider>
);
