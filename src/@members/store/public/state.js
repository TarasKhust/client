import { Map, fromJS } from "immutable";

export const __defaultPublicObject = {
	ajax_token: "test",
};

export default (function() {
	try {
		const state = fromJS(window.__publicObject__ || window.Public || __defaultPublicObject);
		delete window.__publicObject__;
		return state;
	} catch (e) {
		console.error(`public state read error. ${e.message}`);
		return Map({});
	}
})();