import Ajv from "ajv";
import { stopAsyncValidation } from "redux-form";
import { store } from "store/index";

const defaultSchemaOptions = {
	allErrors: true,
};

/**
 *
 * @param schema
 * @param options
 * @returns {function(...[*]=)}
 */
export function responseSchema(schema, options = defaultSchemaOptions) {
	const ajv = new Ajv(options);

	return function (response) {
		const { status, data } = response;

		if (status && schema && !ajv.validate(schema, data)) {
			console.groupCollapsed("%c Schema errors", "color: #f00");

			ajv.errors.forEach((error) => {
				const path = error.dataPath[0] === "." ? error.dataPath.substr(1) : error.dataPath;
				console.groupCollapsed(path);
				console.log(error);
				console.groupEnd(path);
			});

			console.groupEnd("Errors");

			return Promise.reject({ message: "Response schema is not valid" });
		}

		return Promise.resolve(response);
	};
}

/**
 *
 * @param response
 * @returns {Promise}
 */
export function responseFormValidation(response) {
	const { data, message } = response;

	if (!data.hasOwnProperty("validation")) {
		return Promise.resolve(response);
	}

	const {
		form_id, errors,
	} = data.validation;

	if (!form_id || !errors) {
		return Promise.reject("Cannot parse form validation error");
	}

	store.dispatch(
		stopAsyncValidation(form_id, errors)
	);

	return Promise.reject({ message });
}

/**
 *
 * @param response
 * @returns {function(): Promise}
 */
export function responseFake(response) {
	return () => Promise.resolve(response);
}

/**
 *
 * @param data
 * @param formData
 * @returns {FormData}
 */
export function toFormData(data, formData = new FormData()) {
	function convert(data, previousKey) {
		Object.keys(data).forEach((key) => {
			const value = data[key];

			if (value instanceof Object && !Array.isArray(value)) {
				return convert(value, key);
			}

			if (previousKey) {
				key = `${previousKey}[${key}]`;
			}

			if (Array.isArray(value)) {
				value.forEach(val => {
					formData.append(`${key}[]`, val);
				});
			} else {
				formData.append(key, value);
			}
		});

		return formData;
	}

	return convert(data, null);
}

/**
 * Something very important.
 * Without this prefix, requests will not work in members area.
 * @returns {string}
 */
export function withUrlPrefix(url) {
	return window.is_reseller
		? `/members${url}`
		: url;
}

/**
 * @deprecated
 * @param schema
 * @param options
 * @returns {function(...[*]=)}
 */
export function defaultResponseProcess(schema, options = defaultSchemaOptions) {
	const ajv = new Ajv(options);

	return function(response) {
		if (typeof response !== "object") {
			return Promise.reject("Cannot get response from server");
		}

		if (response.status === false || !response.status) {
			return Promise.reject(response.message || "Request failed");
		}

		if (schema && !ajv.validate(schema, response.data)) {
			return Promise.reject(response.message || "Request failed");
		}

		return response.data;
	};
}