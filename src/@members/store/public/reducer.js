import { Map } from "immutable";

import {
	MERGE_TO_PUBLIC,
} from "./actions";

export default function (state = Map(), action) {
	switch (action.type) {
		case MERGE_TO_PUBLIC:
			return state.mergeDeep(action.state);

		default:
			return state;
	}
}
