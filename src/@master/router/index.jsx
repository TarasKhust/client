import React from "react";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "store";
import MainPage from "@master/containers/MainPage/MainPage";
import Pasabahce from "@master/containers/Pasabahce";
import Delivery from "@master/containers/Delivery";
import Contacts from '@master/containers/Contacts'

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				{/*<MainPage />*/}
				<Pasabahce />
				{/*<Delivery />*/}
				{/*<Contacts />*/}
			</Switch>
		</Router>
	</Provider>
);
