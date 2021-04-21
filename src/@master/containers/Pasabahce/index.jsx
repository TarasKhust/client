import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Pasabahce = lazy(() => import(/* webpackChunkName: "Pasabahce" */ "../Pasabahce/Pasabahce"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#pasabahce");

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
			<Route path="/pasabahce">
				<Pasabahce>
					<Content />
				</Pasabahce>
			</Route>
		</Suspense>

	  </Portal>
  );
};

export default router;
