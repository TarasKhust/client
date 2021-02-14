import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import Contact from 'containers/Contact/Contact'
import { store } from 'store'

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
			<Contact/>
		</Router>
	</Provider>
);
