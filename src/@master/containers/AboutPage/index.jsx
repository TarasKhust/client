import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const About = lazy(() => import(/* webpackChunkName: "About" */ "../AboutPage/AboutPage"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#about");

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
			<Route path="/about">
				<About>
					<Content />
				</About>
			</Route>
		</Suspense>

	</Portal>
    );
};

export default router;
