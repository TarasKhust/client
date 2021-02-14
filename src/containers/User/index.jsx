import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Button = React.lazy(() => import(/* webpackChunkName: "User" */ "../User"));

const container = document.querySelector("#user");

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
					<Route exact path="/user/">
						<Button />
					</Route>
				</Suspense>

			</Portal>
	);
};

export default router;
