import React from "react";
import { Provider } from "react-redux";
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "../store";
import Button from '../components/Button'
import Users from 'container/User/Users'

export const history = createBrowserHistory();

export default () => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
			<Route path={"/member/"}>
				<Button/>
			</Route>
			<Route path={"/user/"}>
				<Users/>
			</Route>
			</Switch>
		</Router>
	</Provider>
);
