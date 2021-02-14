import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMiddleware, removeMiddleware } from "redux-dynamic-middlewares";

/**
 *
 * @param key
 * @param callback
 * @returns {function(*): function(*): function(...[*]=)}
 */
const applyCallbackMiddleware = (key = "", callback = Function()) => () => (next) => (action) => {
	if (action.type === key) {
		try {
			return callback();
		} catch (error) {
			console.error(`applyCallbackMiddleware error: ${error.message}`);
			return false;
		}
	}

	return next(action);
};

/**
 *
 * @param key
 * @param callback
 */
const usePopupCallback = (key = "", callback) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (callback) {
			const callbackMiddleware = applyCallbackMiddleware(key, callback);

			if (typeof callback === "function") {
				addMiddleware(callbackMiddleware);

				return () => {
					removeMiddleware(callbackMiddleware);
				};
			}
		}
	}, []);

	if (callback) {
		return;
	}

	const applyCallback = () => {
		return new Promise((resolve) => {
			const callbackMiddleware = dispatch({
				type: key,
			});

			if (callbackMiddleware instanceof Promise) {
				return callbackMiddleware.then((data) => {
					resolve(data);
				});
			}

			resolve(callbackMiddleware);
		});
	};

	return {
		applyCallback,
	};
};

export default usePopupCallback;
