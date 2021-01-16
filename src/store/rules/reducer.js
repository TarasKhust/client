import { fromJS, Map } from "immutable";

import {
	MERGE_RULES,
} from "./actions";

export default (state = Map(), action) => {
	switch (action.type) {
		case MERGE_RULES:
			return state.mergeIn(["rules"], fromJS(action.state));

		default:
			return state;
	}
};
