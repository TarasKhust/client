import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Product = lazy(() => import(/* webpackChunkName: "CardProduct" */ "../CardProduct"));

const container = document.querySelector("#product");

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
                <Route exact path="/product/">
                    <Product />
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
