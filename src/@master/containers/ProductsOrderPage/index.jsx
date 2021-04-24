import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const ProductsOrder = lazy(() => import(/* webpackChunkName: "ProductsOrder" */ "../ProductsOrderPage/ProductsOrderPage"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#order");

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
			<Route path="/order">
				<ProductsOrder>
					<Content />
				</ProductsOrder>
			</Route>
		</Suspense>

	</Portal>
    );
};

export default router;
