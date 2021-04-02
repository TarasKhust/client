import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import CardProduct from "@master/containers/CardProduct/CardProduct";
import { store } from 'store'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import MainPage from "@master/containers/MainPage/MainPage";

export const history = createBrowserHistory();

const client = new ApolloClient({
	uri: "https://48p1r2roz4.sse.codesandbox.io",
	cache: new InMemoryCache()
});


export default () => (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router history={history}>
					{/*<CardProduct/>*/}
				</Router>
				<Router history={history}>
					<MainPage />
				</Router>
			</Provider>
		</ApolloProvider>
);
