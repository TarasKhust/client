import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const ProductDetails = lazy(() => import(/* webpackChunkName: "ProductDetails" */ ".//ProductDetailsPage"));
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
			<Route path="/product_details">
				<ProductDetails>
					<Content />
				</ProductDetails>
			</Route>
		</Suspense>
	</Portal>
    );
};

export default router;
