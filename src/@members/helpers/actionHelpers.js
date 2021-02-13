/**
 *
 * @param section
 * @returns {function(*): string}
 */
export function useSection(section) {
	return function (type) {
		return `${section}:${type}`;
	};
}

/**
 *
 * @param section
 * @returns {function(*=): function(...[*]): Object}
 */
export function useNestedAction(section = "") {
	return function nestedAction(actionCreator = new Function()) {
		// execute action
		return function (...args) {
			const action = actionCreator(...args);

			if (action instanceof Promise) {
				return action;
			}

			return {
				...action,
				type: useSection(section)(action.type),
			};
		};
	};
}

/**
 *
 * @param section
 * @param actions
 * @returns {*}
 */
export function exportNestedActionCreators(section, actions) {
	const nestedAction = useNestedAction(section);
	const _actions = {};

	for (const key in actions) {
		if (actions.hasOwnProperty(key) && typeof actions[key] === "function") {
			_actions[key] = nestedAction(actions[key]);
		}
	}

	return actions;
}

/**
 * Define action creator function description
 * @typedef {function(*): *} actionCreator
 */

/**
 *
 * @param {object} actions
 * @param {function} dispatch
 * @param {object} state
 * @param {function} subscribe
 * @returns {*}
 */
export function bindReactActionCreators(actions, dispatch, state = {}, subscribe = (e) => e) {
	const getState = () => state;
	const useSelector = (selector) => selector(getState());

	return Object.keys(actions).reduce((a, k) => {
		if (typeof actions[k] !== "function") {
			return a;
		}

		a[k] = (...p) => {
			let result = actions[k](...p);

			if (typeof result === "function") {
				result = result(dispatch, getState(), useSelector);
			}

			const modified = subscribe(result, dispatch, getState(), useSelector);

			dispatch(modified);
		};

		return a;
	}, {});
}
