import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Contact = lazy(() => import(/* webpackChunkName: "ConatctButton" */ "container/Contact"));

const container = document.querySelector("#contact");

if (container) {
	if (!container.getAttribute("root")) {
		container.innerHTML = "";
		container.setAttribute("root", "e");
	}
}

const router = () => {
	return (
			<Portal node={container}>
				<Suspense fallback={null}>
					<Route exact path="/contact/">
						<Contact />
					</Route>
				</Suspense>

			</Portal>
	);
};

export default router;
