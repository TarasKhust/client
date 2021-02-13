import React from "react";

export const createContainer = (id) => {
	let el = document.getElementById(id);

	if (!el) {
		el = document.createElement("div");
		el.id = id;
		document.body.appendChild(el)
	}

	return el;
};

export const removeContainer = (id) => {
	const el = document.getElementById(id);

	if (el) {
		el.parentNode.removeChild(el);
	}
};
