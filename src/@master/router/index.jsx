import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "store";
import MainPage from "@master/containers/MainPage";
import Pasabahce from "@master/containers/Pasabahce";
import { ShoppingCardProvider } from "store/ShoppingCard";
import Delivery from "@master/containers/Delivery";
import Contacts from "@master/containers/Contacts";
import ShoppingCard from "@master/containers/ShoppingCardPage";
import CatalogPage from "@master/containers/CatalogPage";
import { ApolloProvider } from "@apollo/client";
import client from "@master/router/apolloClientConfig";

export const history = createBrowserHistory();

export default () => (
	<ApolloProvider client={client}>
		<Provider store={store}>
			<ShoppingCardProvider>
				<Router history={history}>

					<MainPage />
					<Pasabahce />
					<Delivery />
					<Contacts />
					<ShoppingCard />
					<CatalogPage />
				</Router>
			</ShoppingCardProvider>
		</Provider>
	</ApolloProvider>
);
