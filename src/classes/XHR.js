import superAgent from "superagent";
import { store } from "store";

class XHR {
	/**
	 * XMlHttpRequest send query data with method get
	 *
	 * @param url
	 * @param data
	 * @returns {Promise}
	 */
	get({ url, data }) {
		return superAgent
			.get(url)
			// .query(XHR.appendToken(data))
			.then(XHR.parseResponse)
			.then(XHR.validateResponse);
	}

	/**
	 * XMlHttpRequest send post data with method post
	 *
	 * @param url
	 * @param data
	 * @param useFormUrlUncoded
	 * @returns {Promise}
	 */
	post({ url, data }, useFormUrlUncoded = false) {
		const request = superAgent
			.post(url, data)
			.set("Content-Type", "application/json");

		if (useFormUrlUncoded) {
			request
				.set("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
				.set("X-Requested-With", "XMLHttpRequest");
		}

		return request
			// .send(XHR.appendToken(data))
			.then(XHR.parseResponse)
			.then(XHR.validateResponse);
	}

	/**
	 * XMlHttpRequest send post urlencoded data with method post
	 *
	 * @param url
	 * @param data
	 * @deprecated
	 * @returns {Promise}
	 */
	postFormUrlencoded({ url, data }) {
		return this.post({ url, data }, true);
	}

	/**
	 *
	 * @param url
	 * @param data
	 * @returns {Promise}
	 */
	patch({ url, data }) {
		return superAgent
			.patch(url)
			.set("Content-Type", "application/json")
			.send(XHR.appendToken(data))
			.then(XHR.parseResponse)
			.then(XHR.validateResponse);
	}

	/**
	 * XMlHttpRequest send post data with method post
	 *
	 * @param url
	 * @param data
	 * @returns {Promise}
	 */
	delete({ url, data }) {
		return superAgent
			.delete(url)
			.query(XHR.appendToken(data))
			.then(XHR.parseResponse)
			.then(XHR.validateResponse);
	}

	/**
	 *
	 * @param data
	 * @returns {{ajax_token: string}}
	 */
	static appendToken(data) {
		return {
			"ajax_token": XHR.getAjaxToken(),
			...data,
		};
	}

	/**
	 *
	 * @returns {string}
	 */
	static getAjaxToken() {
		return store.getState().public.get("ajax_token");
	}

	/**
	 *
	 * @param response
	 * @returns {Promise}
	 */
	static parseResponse(response) {
		try {
			const {
				statusCode, text, body,
			} = response;

			if (statusCode !== 200) {
				return Promise.reject(
					XHR.responseObject()
				);
			}

			const parsedResponse = (typeof body === "object" && typeof body?.status === "boolean")
				? body

				: (typeof text === "string" && text.length > 0)
					? JSON.parse(text)
					: {};

			return Promise.resolve(
				XHR.responseObject(parsedResponse)
			);
		} catch (e) {
			return Promise.reject(
				XHR.responseObject()
			);
		}
	}

	/**
	 *
	 * @param response
	 * @returns {Promise}
	 */
	static validateResponse(response) {
		const { redirect, ...filteredResponse } = response;

		/**
		 * immediately go to redirect location
		 * can be security issue
		 */
		if (typeof redirect === "string" && !!redirect.length) {
			window.location.href = redirect;
		}

		return filteredResponse.status === true
			? Promise.resolve(filteredResponse)
			: Promise.reject(filteredResponse || {});
	}

	/**
	 *
	 * @param response
	 * @returns {{redirect, data: {}, message: string, status: boolean}}
	 */
	static responseObject(response = {}) {
		const {
			status,
			message = "",
			data = {},
			redirect = "",
		} = response;

		return {
			status: !!status,
			message,
			data,
			redirect,
		};
	}
}

export const XHRConstructor = XHR;

export default new XHR();