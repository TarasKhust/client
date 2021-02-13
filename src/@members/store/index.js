import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { reducer as formValuesReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import constantsState from "./constants";
import publicReducer from "./public/reducer";
import publicState from "./public/state";
import formRulesReducer from "./rules/reducer";

const formRulesState = publicState.get("validation_options");

const staticReducers = {
	public: publicReducer,
	formRules: formRulesReducer,
	form: formValuesReducer,
	constants: () => constantsState,
};

const initialState = {
	constants: constantsState,
	public: publicState,
	formRules: formRulesState,
};

const composeEnhancers = composeWithDevTools({

	staticReducers, trace: true, traceLimit: 25,

	// options like actionSanitizer, stateSanitizer
});

const enhancer = composeEnhancers(
	applyMiddleware(
		thunk,
		dynamicMiddlewares,
	),
);

const _store = createStore(
	combineReducers(staticReducers),
	initialState,
	enhancer
);

// Add a dictionary to keep track of the registered async reducers
_store.asyncReducers = {};

/*
 * Create an inject reducer function
 * This function adds the async reducer, and creates a new combined reducer
 */
_store.injectReducer = (key, asyncReducer) => {
	store.asyncReducers[key] = asyncReducer;

	store.replaceReducer(combineReducers({
		...staticReducers,
		...store.asyncReducers,
	}));
};

export const store = _store;
