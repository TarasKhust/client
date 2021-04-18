import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import CardProduct from "@master/containers/CardProduct/CardProduct";
import { store } from "store";
import MainPage from "@master/containers/MainPage/MainPage";

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
			{/*<CardProduct/>*/}
		</Router>
		<Router history={history}>
			<MainPage />
		</Router>
	</Provider>
);
