import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const CardProduct = lazy(() => import(/* webpackChunkName: "Catalog" */ "../CardProductPage/CardProductPage"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#card_product");

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
			<Route path="/card_product/:slug">
				<CardProduct>
					<Content />
				</CardProduct>
			</Route>
		</Suspense>

	</Portal>
    );
};

export default router;
