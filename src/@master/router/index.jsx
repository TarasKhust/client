import React from "react";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "store";
import MainPage from "@master/containers/MainPage/MainPage";
import Pasabahce from "@master/containers/Pasabahce";
import { ShoppingCardProvider } from "store/ShoppingCard";

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<ShoppingCardProvider>
			<Router history={history}>
				{/*<CardProduct/>*/}
			</Router>
			<Router history={history}>
				<Switch>
					<MainPage />
					<Pasabahce />
				</Switch>
			</Router>
		</ShoppingCardProvider>
	</Provider>
);
