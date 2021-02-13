import { List } from "immutable";

export function useNestedSelector(key) {
	return function nestedSelector(selector) {
		return function (state) {
			return selector(state[key]);
		};
	};
}

export function testUseSelector(store) {
	return function useSelector(selector) {
		return selector(store.getState());
	};
}

export function testUseSelectorCustom(state) {
	return function useSelector(selector) {
		return selector(state);
	};
}

export function equalityArray(id) {
	return function equality(left, right) {
		return List(left.map(i => i[id])).equals(List(right.map(i => i[id])));
	};
}
