import React from "react";
import { Provider } from "react-redux";
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "../store";
import Contact from '../../containers/Contact/Contact'

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
			<Contact/>
		</Router>
	</Provider>
);
