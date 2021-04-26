import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Catalog = lazy(() => import(/* webpackChunkName: "Catalog" */ "../CatalogPage/CatalogPage"));
const Content = lazy(() => import(/* webpackChunkName: "Content" */ "./Content"));

const container = document.querySelector("#catalog");

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
                <Route path="/catalog">
                    <Catalog>
                        <Content />
                    </Catalog>
                </Route>
            </Suspense>

        </Portal>
    );
};

export default router;
